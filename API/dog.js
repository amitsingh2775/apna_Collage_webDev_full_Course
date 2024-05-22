let btn=document.querySelector("button");
let img=document.querySelector("img");
let url='https://dog.ceo/api/breeds/image/random';

async function getImg() {
   try{ 
    let res=await axios.get(url);
    return res.data.message;
   }
   catch(error){
    console.log(error);
      let errorimg='https://media.istockphoto.com/id/639765496/vector/laughing-with-tears-and-pointing-emoticon.jpg?s=612x612&w=0&k=20&c=FVVZllgAwRnQkKmgyDLw4zepwzYc0WBCxOB9N4yFdL0='
     return errorimg;
   }
    
}

btn.addEventListener("click",async()=>{
    let images=await getImg();
    console.log(images);
    img.src=images;
   
})