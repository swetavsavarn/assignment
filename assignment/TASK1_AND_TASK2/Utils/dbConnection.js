const mongoose=require('mongoose')
require('dotenv').config()
const URI=process.env.DBCONNECTIONSTRING
if(!URI)
throw new Error('Add db connection string in env')

async function dbConnect(){
   await mongoose.connect(URI)
}

module.exports=dbConnect