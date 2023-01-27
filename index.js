require ("dotenv").config()
const express = require("express")
const cors=require("cors")
const connect = require("./db")
const app=express()
const PORT=process.env.PORT
const userRouter=require("./src/user.router")
app.use(cors())
app.use(express.json())


app.use("/user",userRouter)
app.get("/",(req,res)=>{
    res.send("Welcome")
})

app.listen(PORT,async(req,res)=>{
    await connect()
    console.log(`listening on http://localhost:${PORT}`)
})