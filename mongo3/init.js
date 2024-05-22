const mongoose = require("mongoose");
const chat = require("./model/chat");
let allchats=[
    {
        from:"amit",
        to:"ashish",
        msg:"helo ji",
        created_at:new Date(),
    },
    {
        from:"rahul",
        to:"subha",
        msg:"helo ",
        created_at:new Date(),
    },
    {
        from:"uttam",
        to:"ashish",
        msg:"helo ji",
        created_at:new Date(),
    },
    {
        from:"aman",
        to:"rohan",
        msg:"helo ji",
        created_at:new Date(),
    },
    {
        from:"abhay",
        to:"ashish",
        msg:"helo ji",
        created_at:new Date(),
    },
    {
        from:"nitesh",
        to:"rahul",
        msg:"helo ji",
        created_at:new Date(),
    },

]
chat.insertMany(allchats).then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})

main().then(()=>{
    console.log("mongodb is connected");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatssapp');
}