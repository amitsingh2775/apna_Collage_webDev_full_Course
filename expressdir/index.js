const express=require("express")
const app=express();
let port=3000
app.listen(port,()=>{

 console.log(`ready hai bro prot no ${port}`);
})


// for routing use 
// app.get("/home",(req,res)=>{
//     console.log("recived");
//     res.send("hi your home is here")
// })
// app.get("/about",(req,res)=>{
//     console.log("recived");
//     res.send("hi your about is here")
// })
// app.get("/login",(req,res)=>{
//     console.log("recived");
//     res.send("hi your login page is here")
// })

// app.get("/new",(req,res)=>{
//     console.log("recived");
//     res.send("hi your new page is here")
// })
// // agar userr ne galat path request kar diye to
// app.get("*",(req,res)=>{
//     console.log("recived");
//     res.send("this page not found")
// })



// handling request

// app.use((req,res)=>{
//     //sending response according to request
//     res.send("hello ji kya hal chal")
//     console.log("request recived");
// })


// path parameter

app.get("/:username/:id",(req,res)=>{
    let {username,id}=req.params
    console.log(req.params);
    res.send(`hii @${username} and your id is ${id}`)
})

// query string like->www.npmjs.com/search?q=nodemon
  // www.npmjs.com/search?q=vscode

  app.get("/search",(req,res)=>{
    let {q}=req.query;
    if(!q){
        res.send("node request")
    }
   // console.log(`req is ${q}`);
    res.send(`your respone query is ${q}`)
  })