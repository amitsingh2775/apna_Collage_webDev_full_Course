const express = require("express");
const router = express.Router();
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");

// Route to render the signup form
router.get("/signup", (req, res) => {
    res.render("users/signup.ejs");
});

// Route to handle user signup
router.post("/signup", wrapAsync(async (req, res) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const user1 = await User.register(newUser, password);
        req.login(user1,(err)=>{
            if(err){
                return next(err)
            }
            req.flash("success", "User is registered successfully");
            res.redirect("/listings");
        })
        
    } catch (error) {
        req.flash("error", error.message);
        res.redirect("/signup");
    }
}));

// Route to render the login form
router.get("/login", (req, res) => {
    res.render("users/login.ejs");
});

router.post("/login",passport.authenticate("local",{failureRedirect:'/login' , failureFlash:true}),async(req,res)=>{
   req.flash("success","you are logedin")
   res.redirect("/listings")
})

// route for logout
router.get("/logout",(req,res,next)=>{
    req.logOut((err)=>{
        if(err){
           return  next(err)
        }
        req.flash("success","logout succesfull")
        res.redirect("/listings")
    })
})

module.exports = router;