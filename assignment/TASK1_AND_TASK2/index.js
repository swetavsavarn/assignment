const express=require('express')
const app=express()
const dbConnect=require('./Utils/dbConnection')
const createOrderRouter=require('./Routers/createOrder')
const body=require('body-parser')

app.use(body.json())
app.use(createOrderRouter)


dbConnect().then(()=>{
    app.listen(5000,()=>{
        console.log("server started")
    })
})
