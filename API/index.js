// let jsonres='{"name":"amit"}';
//   let images=JSON.parse(jsonres);
      
//   console.log(images.name);

let heading=document.querySelector("h1");
let para=document.querySelector("p");
let url="https://catfact.ninja/fact";
// console.log(url);
fetch(url)
.then((res)=>{ 
     console.log(res);
     
    return res.json().then((data)=>{
      console.log(data);
      heading.innerText=data.fact;
      console.log(data.fact);
      return fetch(url);
    })
    .then((res)=>{
      return res.json().then((data)=>{
        para.innerText=data.fact;
      })
    })

})

.catch((error)=>{
    h1.innerText="Not found";
})
