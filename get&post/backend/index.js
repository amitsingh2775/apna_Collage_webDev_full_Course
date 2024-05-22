const express=require("express")
const app=express();
const port=8080;

app.use(express.urlencoded({extended:true}))

app.get("/register",(req,res)=>{

    //we know data query string me ayega ise ham acces kar sakte hai
    let {user,password}=req.query
    res.send(`get respone accept wlcome to ${user}`)
})
app.post("/register",(req,res)=>{
     let {user,password}=req.body
    res.send(`post response accept ${user}`)
})

app.listen(port,()=>{
    console.log(`my port ${port} is ready`);
})