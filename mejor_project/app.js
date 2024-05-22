const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const path = require("path");
const port=3000
//const methodOverride = require("method-override");


const MONGO_URL="mongodb://127.0.0.1:27017/wenderlist"
main()
  .then(()=>{
    console.log("DB is Connected");
  })
  .catch((err)=>{
    console.log(`error is ${err}`);
  })

  async function main() {
    await mongoose.connect(MONGO_URL);
  
  }

  app.set("view engine",'ejs')
  app.set("views",path.join(__dirname,"views"))

app.get("/",(req,res)=>{
    res.send("hii wllcome")
})
app.listen(port,()=>{
    console.log(`port is works at port no. ${port}`);
})

// sample of listing
app.get("/testlisting",async(req,res)=>{
  let samplelisting=new listing({
    title:"Hotel Crown",
    description:"the king of hotels in goa",
    price:4500,
    location:"near beatch",
    country:"india",
  })
  await samplelisting.save()
  console.log("sample was saved succesfully");
  res.send("succesfully testing done")
})

app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});

  res.render("listings/index.ejs", { allListings });
});

