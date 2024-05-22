const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate=require("ejs-mate")
const wrapAsync=require("./utils/wrapAsync.js")
const ExpressError=require("./utils/ExpressError.js")
const {listingSchema}=require("./schema.js")
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
const Review = require("./models/review.js");
const session=require("express-session")
const flash=require("connect-flash")
const passport=require("passport")
const localStrategy=require("passport-local")
const User=require("./models/user.js")

// refactoring kya gya hai another folder me hai or code 
const listings= require("./routes/route.js")
const reviews=require("./routes/review.js")
// users wala router ko include karo for signup
const usersRouter=require("./routes/users.js")

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine('ejs',ejsMate)
app.use(express.static(path.join(__dirname,"/public")))
// express session initialized
const sessionOption={
  secret:"newkey",
  resave:false,
  saveUninitialized:true,
  cookie:{
    expires:Date.now() + 7*24*60*1000,
    maxAge:7*24*60*1000,
    httpOnly:true,
  }
}
app.listen(8080, () => {
  console.log("server is listening to port 8080");
});

 // use express session
//  app.get("/", (req, res) => {
//   res.send("Hi, I am root");
// });
 app.use(session(sessionOption))
 // use flash
 app.use(flash())

 // passsword initialization
 app.use(passport.initialize());
 app.use(passport.session())
passport.use(new localStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use((req,res,next)=>{
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser=req.user
  next();
}) 


// demo user creating for userAuthentication check
// app.get("/user",async(req,res)=>{
//   let User1=new User({
//     email:"amit@gmail.com",
//     username:"amit"
//   })
  // yah ek register method hai jo automatic password
  // create karta hai or check karta hai hi user exist krta hai ki na

//   let reguser=await User.register(User1,"Openbeta")
//   res.send(reguser)
// })

// router wala folder ko use karna 
app.use("/listings",listings)
app.use("/listings/:id/reviews",reviews)
app.use("/",usersRouter)

// app.get("/testListing", async (req, res) => {
//     let sampleListing = new Listing({
//       title: "My New Villa",
//       description: "By the beach",
//       price: 1200,
//       location: "Calangute, Goa",
//       country: "India",
//     });
  
//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send("successful testing");
//   });

  // if a page or route not exist call universal
  app.all("*", (req,res,next)=>{
    next(new ExpressError(404,"page not found"))
    
   
  })



// custom error handling
app.use((err,req,res,next)=>{
  let{statusCode=500,message="something went wrong"}=err
  res.render("listings/pagenotfound.ejs",{statusCode,message})
  next()

  // res.status(statusCode).send(message)
  
})

// custom wrapAsync-> it is a better way to write try-catch block
