

//  async function

// async function greet(){
   
//     return "amit";
// }
// greet()
// .then((res)=>{
//     console.log("promis was resolve");
//     console.log(res);
// })
// .catch((error)=>{
//     console.log(error);
// })

  // await

  function getNum(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*10)+1;
            if(num>3){
                reject("promise reject")
            }
            
            resolve(num);
        },2000);
    });
  }

  async function demo(){
    // error handling to try and catch
    try{
    await getNum()
    .then((res)=>{ console.log(res);})
    await getNum()
    .then((res)=>{ console.log(res);})
    await getNum()
    .then((res)=>{ console.log(res);})
    await getNum()
    .then((res)=>{ console.log(res);})
    }
    catch(error){
        console.log(error);
    }
    console.log("hii");
    
  }