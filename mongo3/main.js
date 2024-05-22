const express=require("express")
const app=express()
const port=8080
const mongoose = require("mongoose");
const path=require("path")
const chat=require("./model/chat");
const { log } = require("console");
const methodOverrie=require("method-override")


app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs")
app.use(express.urlencoded({extends:true}))
app.use(methodOverrie("_method"))
const chat1=new chat({
    from:"amit",
    to:"ashish",
    msg:"helo ji",
    created_at:new Date(),
})
chat1.save().then((res)=>{
    //console.log(res);
})
.catch((err)=>{
    console.log(err);
})

main().then(()=>{
    console.log("mongodb is connected");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatssapp');
}
app.get("/",(req,res)=>{
    res.send("welcome ji")
})

// chat rout
app.get("/chats",async (req,res)=>{
    let chats= await chat.find()
    res.render("chat.ejs",{chats})
})

// new chat rout 
app.get("/new/chat",(req,res)=>{
    res.render("new.ejs")
})
app.listen(port,()=>{
    console.log("port 8080 is work");
})

// create route
app.post("/chats",(req,res)=>{
    let{from,to,msg}=req.body;
     let newchat=new chat({
        from:from,
        to:to,
        msg:msg,
        created_at:new Date(),
     })
     console.log(newchat);
     res.send("working")


})

// edit rout
app.get("/chats/:id/edit",async(req,res)=>{
    let {id}=req.params;
    let chatfirst= await chat.findById(id)
    res.render("edit.ejs",{chatfirst})
})

// update rout
app.put("/chats/:id", async (req,res)=>{
    let {id}=req.params;
    let {msg:newmsg}=req.body;
    let updatechat= await chat.findByIdAndUpdate(id,{msg:newmsg},{runValidators:true,new:true});
    console.log(updatechat);
    res.redirect("/chats")

})

// delete route
app.delete("/chats/:id",async (req,res)=>{
    let {id}=req.params;
    let deltetedchat=await chat.findByIdAndDelete(id);
    console.log(deltetedchat)
    res.redirect("/chats");
})