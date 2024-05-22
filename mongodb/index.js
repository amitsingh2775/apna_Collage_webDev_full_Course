const mongoose = require("mongoose");


main()
.then(()=>{
    console.log("conected");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}

/// scchema
 const UserSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,

 })
 const User=mongoose.model("User",UserSchema) 

 const user1=new User({
    name:"amit",
    email:"example@gmail.com",
    age:20,
 })
 user1.save()
 const user2=new User({
   name:"rahul",
   email:"example@gmail.com",
   age:20,
})
user2.save()

// *-> find data int mongodb <-*

// User.find({}).then((data)=>{
//    console.log(data);
// })
// .catch((err)=>{
//    console.log(err);
// })

// User.findOne({name:{$eq:"rahul"}}).then((data)=>{
//    console.log(data);
// })
// .catch((err)=>{
//    console.log(err);
// })

// User.find({name:{$eq:"rahul"}}).then((data)=>{
//    console.log(data);
// })
// .catch((err)=>{
//    console.log(err);
// })

// *-> update data in mongodb <-*
//  User.updateOne({name:"rahul"},{age:35}).then((data)=>{
//    console.log(data);
//  })
//  .catch((err)=>{
//    console.log(err);
//  })
//  User.updateMany({age:{$lt:25}},{age:40}).then((data)=>{
//    console.log(data);
//  })
//  .catch((err)=>{
//    console.log(err);
//  })

//  User.find({}).then((data)=>{
//    console.log(data);
// })
// .catch((err)=>{
//    console.log(err);
// })

// Model.findOneAndpdate()

// User.findOneAndUpdate({name:"amit"},{age:80},{new:true}).then((res)=>{
//    console.log(res);
// })
// .catch((err)=>{
//    console.log(err);
// })


// delete functions

// User.deleteOne({name:"amit"}).then((res)=>{
//    console.log(res);
// })
// .catch((err)=>{
//    console.log(err);
// })

User.deleteMany({name:"amit"}).then((res)=>{
   console.log(res);
})
.catch((err)=>{
   console.log(err);
})
User.find({name:"amit"}).then((data)=>{
      console.log(data);
   })
   .catch((err)=>{
      console.log(err);
   })