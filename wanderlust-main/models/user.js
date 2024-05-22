const mongoose = require("mongoose");
const Schema=mongoose.Schema
const passportLocalMomgoose=require("passport-local-mongoose")

const UserSchema=new Schema({
    email:{
        type:String,
        require:true,
    }
})
UserSchema.plugin(passportLocalMomgoose)
module.exports=mongoose.model("User",UserSchema )