module.exports.isLoggedIn=(req,res,next)=>{
    if(!req.isAuthenticated()){
        req.flash("error","login yourself")
       return res.redirect("/login")
       }
       next()
}