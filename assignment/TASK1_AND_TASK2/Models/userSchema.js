const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    _id:false,
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    registration_date:{
        type:Date,
        required:true
    },

})

module.exports=mongoose.model('user',userSchema)