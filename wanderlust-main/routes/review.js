const express = require("express");
const router = express.Router({mergeParams: true});
const Listing = require("../models/listing.js");
const { listingSchema,reviewSchema } = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const wrapAsync = require("../utils/wrapAsync.js");
//const listings= require("./routes/route.js")

const validateReview=(req,res,next)=>{
    let{error}=reviewSchema.validate(req.body)
    if(error){
      throw new ExpressError(400,error)
    }
    else{
      next();
    }
  }
// review store in db
// review ka post route
router.post("/",validateReview,wrapAsync( async (req, res) => {
    console.log(req.params.id);
    // Accessing the listing ID correctly
    let Llisting = await Listing.findById(req.params.id);
    console.log(Llisting);
    // Creating a new review instance directly from request body
    let newReview = new Review(req.body.review);
    
    
   
    // Add the new review to the listing's reviews array
    Llisting.reviews.push(newReview);
    // Save the updated listing
    // Save the new review
    await newReview.save();
    await Llisting.save();
    console.log(newReview);
    res.redirect(`/listings/${Llisting._id}`);
 
}));

module.exports=router