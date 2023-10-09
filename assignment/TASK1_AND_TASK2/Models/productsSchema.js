const mongoose=require('mongoose')
const productsSchema=new mongoose.Schema({
    _id:false,
    product_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        unique:true
    },
    product_name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    stock_quantity:{
        type:Number,
        required:true
    },

})

module.exports=mongoose.model('products',productsSchema)