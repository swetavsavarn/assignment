const Product = require('../Models/productsSchema');

async function createOrder(req, res) {
  const { customer_name, customer_email, items } = req.body;

  try {
    const productUpdates = [];

    const productsValidation = await Promise.all(
      items.map(async (item) => {
        const product = await Product.findById(item.product_id);
        if (!product) {
          return { error: `Product with ID ${item.product_id} not found.`, product_id: item.product_id };
        }
        if (product.stock_quantity < item.quantity) {
          return { error: `Insufficient stock for product with ID ${item.product_id}.`, product_id: item.product_id };
        }

        productUpdates.push({
          updateOne: {
            filter: { _id: item.product_id },
            update: { $inc: { stock_quantity: -item.quantity } }
          }
        });

        return null;
      })
    );

    if (productsValidation.every((validation) => !validation)) {
      await Product.bulkWrite(productUpdates);

      res.status(201).json({ message: 'Order created successfully.' });
    } else {
      const errors = productsValidation.filter((validation) => validation);
      res.status(400).json({ errors });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error.' });
  }
}

module.exports = { createOrder };
