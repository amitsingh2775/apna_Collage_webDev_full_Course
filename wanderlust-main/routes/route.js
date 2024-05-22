const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { listingSchema } = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
// require login middleware
const {isLoggedIn}=require("../middleware.js")




const validateListing=(req,res,next)=>{
    let{error}=listingSchema.validate(req.body)
    if(error){
      throw new ExpressError(400,error)
    }
    else{
      next();
    }
  }
  

//Index Route
router.get("/", async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
  });
// new route
// first we check if user login or registered then can post o/w login using isLoggin
router.get("/new",isLoggedIn,(req,res)=>{
  
    res.render("listings/new.ejs")
  })
  
  // show route
  
  router.get("/:id", async (req, res) => {
    let { id } = req.params;
    const llisting = await Listing.findById(id).populate('owner');
    // agar listing exist na karen to
    if(!llisting){
      req.flash("error","Its Not Exists")
      // jab exist nahi karti hai to home page per chala jaie
      res.redirect("/listings")
    }
   
    res.render("listings/show.ejs", { llisting });
  });
  
  // redirect route if listing is create or create route
  router.post("/",validateListing,wrapAsync(async(req,res,next)=>{
      
       if(!req.body.listing){
        throw new ExpressError(400,"send vaild data")
        next();
       }
    
      const newlisting=new Listing(req.body.listing)
      newlisting.owner=req.user._id
      //console.log(newlisting.image);
      await newlisting.save()
      req.flash("success", "Post Add successfully");
      //console.log(newlisting);
      res.redirect("/listings")

    
  }))
  
  // edit route
  
  router.get("/:id/edit",isLoggedIn,async(req,res)=>{
    let { id } = req.params;
    const llisting = await Listing.findById(id);
    if(!llisting){
      req.flash("error","Its Not Exists")
      // jab exist nahi karti hai to home page per chala jaie
      res.redirect("/listings")
    }
    res.render("listings/edit.ejs",{llisting})
  
  
  })
  
  // update route
  router.put("/:id",validateListing,isLoggedIn,wrapAsync(async(req,res)=>{
    let { id }=req.params
    await Listing.findByIdAndUpdate(id, {...req.body.listing})
    req.flash("success","Post Updated")
    res.redirect(`/listings/${id}`)
  }))
  
  
  
  // delete route
  router.delete("/:id",isLoggedIn,async(req,res)=>{
    let { id }=req.params
    await Listing.findByIdAndDelete(id)
    req.flash("success","Post is Deleted")
    res.redirect("/listings")
  })

  module.exports=router