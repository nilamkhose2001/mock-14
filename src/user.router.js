const express=require("express")
const User=require("./user.model")
const jwt=require("jsonwebtoken")
const app=express.Router()


app.post("/signup",async(req,res)=>{
    const {name,level}=req.body

    try{
        
    
        await User.create({
            name,level
          })
    
    
    
         
    
          return res.status(201).send({
            message: "user created successfully",
            name,
           level
          });
    }
    catch (err) {
        return res.send({message:err})
    }
   
})


app.get("/random",async(req,res)=>{
  const letter ='abcdefghijklmnopqrstuvwxyz';

function generateString(length) {
    let result = '';
    const charactersLength = letter.length;
    for ( let i = 0; i < length; i++ ) {
        result += letter.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}
let n=Math.random() * (5 - 2) + 2;
let word=generateString(n)
console.log(generateString(n));
return res.send(word);
})

app.post('/score',async (req,res)=>{
    let {score,name}=req.body 
   
   
    let u=await User.updateOne({name:name},{$set:{score:score}})
    let user=await User.findOne({name:name})
    console.log(user)
    return res.send(u)
    
})

app.get("/",async(req,res)=>{
    let user=await User.find()
    return res.send(user)
})

module.exports =app