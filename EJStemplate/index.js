const express=require("express")
const app=express()
const path=require("path")
let port=8080;

app.set("view engine" ,"ejs")
app.set("views", path.join(__dirname,"/views"))

app.get("/",(req,res)=>{
    res.render("home.ejs")
})
app.listen(port,()=>{
 console.log(`your port no is ${port}`);
})
// asume dinamicaly fetch data form database and render html page
app.get("/roledice",(req,res)=>{
    let assumedata= Math.floor(Math.random()*6)+1
    //{num:assumedata} -> it is a object and num is a key that i can accsess in html page
    res.render("roledice.ejs",{num:assumedata})
})

// for istagram.ejs
// app.get("/ig/:username",(req,res)=>{
//     const folowers=["amit","ashish","bullet"]
//     let {username}=req.params;
//     res.render("instagram.ejs",{username,folowers})
// })

// for instagram2 fecting images of user .name ,posts alots]
app.get("/ig/:username",(req,res)=>{
     const {username}=req.params;
    const instaData=require("./data.json")
    const data=instaData[username]
   if(data){
    res.render("instagram2.ejs",{data})
   }
   else{
    res.render("error.ejs",{username})
   }
   
})