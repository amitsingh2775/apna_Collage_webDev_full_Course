const mongoose = require('mongoose');
const {Schema}=mongoose;

main().then(()=> console.log("connection succesfull")).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');

  
}

const userSchema=new Schema({
    username:String,
    address: [
        {
            location:String,
            city:String,
        },
    ],
})
const User=mongoose.model("User",userSchema)

const addUsers = async() =>{
    let user1= new User({
        username: "amit kumar",
        address:[{
            location: "BR-29 siwan",
            city: "siwan",
        }]
    })
    user1.address.push({locaion:"ambala", city:"mullana"})
   let res= await user1.save()
   console.log(res);
    
}
addUsers()