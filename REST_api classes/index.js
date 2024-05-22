const { dir } = require("console")
const express=require("express")
const app=express()
const port=8080
const path=require("path")
const {v4: uuidv4}=require('uuid');


// for data parse
app.use(express.urlencoded({extend:true}))
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))
app.set(express.static(path.join(__dirname,"public")))

app.listen(port,()=>{
    console.log(`wllcome to port no- ${port}`);
})

// i create a array for storing data of post i create a own data becasue i have no database
let posts=[
      {
        id:uuidv4(),
        username:"amit_kumar",
        content:"hii there after two days i will visit your collage",
      },
      { 
        id:uuidv4(),
        username:"MMDU_official",
        content:"mmdu is a greate coolage among nort india",
      },
      {
        id:uuidv4(),
        username:"virat_kohli",
        content:"nice to meet you i wish happy birthday",
      },
      {
        id:uuidv4(),
        username:"__Instagram",
        content:"instagram interoduce new feature  after 2020",
      }
]

app.get("/post",(req,res)=>{
    res.render("index.ejs" ,{posts})
}) 
app.get("/posts/new",(req,res)=>{
  res.render("addpost.ejs")
})

app.post("/posts",(req,res)=>{
   let {username,content}=req.body
   let id=uuidv4()
   posts.push({id,username,content})
   res.redirect("/post"); 
})
//show route

app.get("/posts/:id",(req,res)=>{
  let {id}=req.params
  let post=posts.find((p)=> id === p.id)
  
  res.render("show.ejs",{post})
})
// update content of blog
app.get("/posts/:id/edit",(req,res)=>{
  let {id}=req.params
  
  let post=posts.find((p)=> id === p.id)
  
  res.render("edit.ejs",{post})
  
  
})
// delete post
app.delete("/posts/:id",(req,res)=>{
  let {id}=req.params
  
  posts=posts.filter((p)=> id !== p.id)
  res.redirect("/post")

  
})
