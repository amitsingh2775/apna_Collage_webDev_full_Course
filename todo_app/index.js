let btn=document.querySelector("#btn");
let ul=document.querySelector("ul");
let input=document.querySelector("input");


btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=input.value;
    let deletebtn=document.createElement("button");
    deletebtn.innerText="Delete";
    deletebtn.classList.add("dl");
    if(input.value!=""){
        item.appendChild(deletebtn);
        console.log(item);
        ul.appendChild(item);
    }
    else{
        alert("write something");
    }
    
    
    input.value="";
})

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listitem=event.target.parentElement;
        listitem.remove();
    }

})