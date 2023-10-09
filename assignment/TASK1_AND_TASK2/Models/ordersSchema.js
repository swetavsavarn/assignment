const mongoose=require('mongoose')
const ordersSchema=new mongoose.Schema({
    _id:false,
    order_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        unique:true
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
    },
    order_date:{
        type:Date,
        required:true
    },

})

module.exports=mongoose.model('orders',ordersSchema)