
let form = document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
    // alert("form submited");
    // let input=document.querySelector("input");
    // console.log(input.value);
    
    // let div=document.querySelector("div1");
    console.dir(form);
    let user=this.elements[0];
    console.log(user.value);
    alert(`hii your user nam is ${user.value}`);

})

