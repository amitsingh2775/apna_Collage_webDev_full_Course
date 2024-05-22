// keypress->game start
// |
// level1+btnflash ho jaye
// for traking
let gameSeq=[];
let userSeq=[];
let startGame=false;
let level=0;
let h2=document.querySelector("h2");
let btns=["red","blue","yellow","pink"];
// for keypress if a user click first time game is started
document.addEventListener("keypress", function () {
    if (startGame == false) {
        console.log("game is started");
        startGame = true;
        levelUp();
    }
  });

//function for levelUp

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    // random btn choose
    let randIndex=Math.floor(Math.random()*4);
    let randcolor=btns[randIndex];
    let rndbtn=document.querySelector(`.${randcolor}`);
    // console.log(randIndex);
    // console.log(randcolor);
    // console.log(rndbtn);
    gameSeq.push(randcolor);
    console.log(gameSeq);
    btnFlash(rndbtn);
}

// fnction for button flashing
function btnFlash(btn){
    btn.classList.add("flash");
    // after flash remove flashising so i use settimeout
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}


// fetch each buttons for html
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
   btn.addEventListener("click",btnPress)
}



//  for button press
function btnPress(){
    let btn=this;
    btnFlash(btn);
    userColor=btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    console.log(userSeq);
    checkAns(userSeq.length-1);

 }

 

// check btn 
function checkAns(indx) {
       // last index nkialenge for check ki user ne jo last color choose kiya hai kya wah hamer game seq ke equal hai
       
       if(userSeq[indx]==gameSeq[indx]){
        if(userSeq.length==gameSeq.length){
            setTimeout( levelUp(),1000)
           
        }
        console.log("same value");
       }
       else{
        h2.innerHTML=`OOPS! Game Over! <br> your Score was<b>${level}</b> <br> press any key for start..`;
        h2.style.color="white";
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="grey";
            h2.style.color="green";

        },150);

        
        // for start game from begining
        reset();
       }
}



 function reset(){
    gameSeq=[];
    startGame=false;
    userSeq=[];
    level=0;
 }