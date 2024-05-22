const express=require("express")
const app=express()
const port=8080
app.listen(port,()=>{
    console.log("prot is 8080");
})
app.get("/",(req,res)=>{
    res.send("hii")
})
const check=(req,res,next)=>{
    let{token}=req.query
    if(token==="giveaccess"){
        next();
    }
    res.send("first register yourself")
}
app.get("/api",check,(req,res)=>{
    res.send("data")
})
app.get("/new",check,(req,res)=>{
    res.send("data")
})