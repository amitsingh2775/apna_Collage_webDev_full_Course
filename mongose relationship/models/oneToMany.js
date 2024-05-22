const mongoose = require('mongoose');
const {Schema}=mongoose;

main().then(()=> console.log("connection succesfull")).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');

  
}
// one to many
const orderSchema=new Schema({
    item:String,
    price:Number,
})

// store all orders id in customer schema
const customerSchema=new Schema({
    name:String,
    orders:[
        {
            type:Schema.Types.ObjectId,
            ref:"Order",
        }
    ]
})
// pre and post middleware in mongoose
// customerSchema.pre("findOneAndDelete",async()=>{
//     console.log("pre middleware");
// })
customerSchema.post("findOneAndDelete",async(customer)=>{
   if(customer.orders.length){
    let resu=await Order.deleteMany({ _id: {$in:customer.orders}})
   console.log(res);   
}
})


const Order= mongoose.model("Order",orderSchema)
const customer=mongoose.model("customer",customerSchema)

 const findCustomer=async()=>{
//     // let cust1=new customer({
//     //     name:"amit kumar",
//     // })
//     // let odr1=await Order.findOne({item:"book"})
//     // let odr2=await Order.findOne({item:"jacket"})
//     // cust1.orders.push(odr1)
//     // cust1.orders.push(odr2)

//     // let res=await cust1.save()

  let res=await customer.find({}).populate("orders")
    console.log(res);
 }
 findCustomer();

// const addOrder= async()=>{
//  let res=await Order.insertMany([
//     {item:"book",price:100},
//     {item:"shirt",price:700},
//     {item:"jacket",price:1200},
//     {item:"mobile",price:80000},
//   ] )
//     console.log(res);
// }
// addOrder()

const addcustomer=async()=>{
    let newcust=new customer({
        name:"rajuji",
    })
    let neworder=new Order({
        item:"bag",
        price:900,
    })
    newcust.orders.push(neworder)
    await neworder.save()
    await newcust.save()
    
}
addcustomer()

const delcust=async()=>{
    let data=await customer.findByIdAndDelete("665d6d400af74f213f928f14e")
    console.log(data);
}
delcust();