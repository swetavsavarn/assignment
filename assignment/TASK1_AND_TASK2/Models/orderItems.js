const mongoose=require('mongoose')
const orderItemsSchema=new mongoose.Schema({
    _id:false,
    order_item_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
    },
    order_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        unique:true
    },
    product_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
    },
    quantity:{
        type:Number,
        required:true
    },
   

})

module.exports=mongoose.model('orderItems',orderItemsSchema)