let url='http://universities.hipolabs.com/search?name=';
let btn=document.querySelector("button")
let ul=document.querySelector("ul")


async function getcollage(country){
    try{
      let res=await axios.get(url + country)
      return res.data
    }
    catch(e){
        console.log(e);
      return[];
    }
}

btn.addEventListener("click", async()=>{
    let country=document.querySelector("input").value;
    console.log(country)
    let collgarray= await getcollage(country);
    show(collgarray);

})

function show(collgarray) {
   for(col of collgarray){
    console.log(col);
   }
    
}