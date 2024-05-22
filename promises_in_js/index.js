 
 // note isme hamne ek data ko dbase me store karnane ki kosis ki hai
  // multiple data ko store karayenge if n/w connection weak hai
  // or 1st data fail ho gya to dusra aone app nahi hoga
  // or isme hamne callback ka use kiya hai ise type
  // ke callBack ko callback hell bolte hai so ise avoid karne ke liye
 // ham promise ka use karte hai
//  function savetoDB(data,succes,failure){
//     let internetSpeed=Math.floor(Math.random()*10)+1;
//     if(internetSpeed>4){
//         succes();
//     }
//     else{
//         failure();
//     }
//  }

//  savetoDB("amit",
//  ()=>{
//     console.log("your data1 was saved");
//     savetoDB("rahul",
//     ()=>{
//         console.log("data2 was saved");
//     },
//     ()=>{
//         console.log("data2 fail");
//     }
//     )
//  },
//  ()=>{
//     console.log("weak connection");
//  }
//  );

 
 // resolve and avoide this code using promise
 function savetoDB(data){
    return new Promise((resolve,reject)=>{
        let internetSpeed=Math.floor(Math.random()*10)+1;
        if(internetSpeed>4){
            resolve("data was saved");
        }
        else{
            reject("weak connection");
        }
    });
  
 }

  // then() & catch() in promise
 let req=savetoDB("hii") /// req=promise object
 req.then((result)=>{
    console.log(result);
    console.log("promise resolved");
 })
 .catch((error)=>{
    console.log(error);
    console.log("reject");
 })