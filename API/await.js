// fetch url using async and await


// let url="https://catfact.ninja/fact";
// let heading=document.querySelector("h1");
// let para=document.querySelector("p");

// async function getfacts() {
//     try {
//         let res= await fetch(url);
//     console.log(res);
//     let data=await res.json();
//     console.log(data);
//     heading.innerText=data.fact;
//     console.log(data.fact);

//     // fetch another data from same api
//     let res2= await fetch(url);
//     console.log(res2);
//     let data2=await res2.json();
//     console.log(data2);
//     para.innerText=data2.fact;
//     console.log(data2.fact);

//     } catch (error) {
//         console.log(error);
//     }
// }

// getfacts();

// same code using axios library
// we fect api using axios.get() method
// or ye 'axios.get()' ek promise return karega or usper ham
// diffrent mathod  uses kar apmne data ko use karenge 
let url="https://catfact.ninja/fact";

let para=document.querySelector("p");
let btn=document.querySelector("button")

async function getfacts() {
         try {
            let res= await axios.get(url);
    //    console.log(res);
       
    //    console.log(res.data);
        
    //     console.log(res.data.fact);
        return res.data.fact;
    
       // fetch another data from same api
    //     let res2= await axios.get(url);
    //    console.log(res2);
    
    //    console.log(res2.data2);
    //    para.innerText=res2.data2.fact;
    //    console.log(res2.data2.fact);
    
        } catch (error) {
            console.log(error);
            return "not found";
        }
 }
    
  btn.addEventListener("click",async()=>{
    console.log("clicked");
    let facts=await getfacts();
    console.log(facts);
    para.innerText=facts;
  })

