const express=require("express")
const app=express();
const session=require("express-session")
const port=3000
const flash=require("connect-flash")
const path=require("path")

app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))

// app.use("/",(req,res)=>{
//     res.send("hii amit now you learn express-sessions")
// })
//session create

   const sessionOption={
    secret:"mystring",
    resave:false,
    saveUninitialized:true,
}
app.use(session(sessionOption))
// flash use karne se pahle ye use karna parta hai 1st require it and use it
app.use(flash())

// app.get("/test",(req,res)=>{
//     res.send("test succesful..")
// })

// app.get("/reqcount",(req,res)=>{
//     if(req.session.count){
//         req.session.count++;
//     }
//     else{
//         req.session.count=1;
//     }
   
//     res.send(`you sent req ${req.session.count} times`)
// })

//best way to use flash using middleware
app.use((req,res,next)=>{
    res.locals.sucmessage=req.flash("succes")
    res.locals.errmessage=req.flash("error")
    next()
})
app.get("/register",(req,res)=>{
    let{name="NULL"}=req.query
    req.session.name=name;
    console.log(req.session.name);
    //res.send(name)
    //redirect hone se pahle message print karenge
    if(name=="NULL"){
        req.flash("error","user not register succesful")
    }
    else{
        req.flash("succes","user register succesful")
    }
    
    res.redirect("/hello")
})
app.get("/hello",(req,res)=>{
    
    res.render("home.ejs",{name:req.session.name})
    
})
app.listen(port,()=>{
    console.log(`server is ready on ${port}`);
})