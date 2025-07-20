let gameSeq=[];
let user=[];
let btns=["yellow","red","green","purple"];
let started=false;
let level=0;
let max=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        
        console.log("game started");
        started=true;
        levelUp();
    }
})

function gameFlash(btn){
   btn.classList.add("flash");
   setTimeout(function(){ 
    btn.classList.remove("flash")},250
   )
   
}



function userFlash(btn){
    btn.classList.add("user");
    setTimeout(function(){
     btn.classList.remove("user")},150
    )
    
 }

 function check(idx){
    // user=[];
    // let id/x=level-1;
    if(user[idx]===gameSeq[idx]){
        if( user.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
        


    }else{
        max=Math.max(max,level);
        h2.innerHTML=`GAme over !! Your score was <b>${level} , Highest score is ${max}</b>  <br>Press any key to restart`
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },350)

        reset();
    }
    
} 
function btnPress(){
    
    console.log("pressed");
    let btn=this;
      
    
    userFlash(btn);

    userCol=btn.getAttribute("id");
    console.log(userCol);user.push(userCol);
    check(user.length-1); 
 

}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}

function levelUp(){
    user=[];
    level++;
    h2.innerText=`level ${level}`;


    let randIdx=Math.floor(Math.random()*3);
    let randCol=btns[randIdx];


    gameSeq.push(randCol);
    let randBtn=document.querySelector(`.${randCol}`);
    gameFlash(randBtn);
    console.log(gameSeq)


}

function reset(){
    started=false;
    gameSeq=[];
    user=[];
    // max=Math.max(level,max);
    level=0;
    
}
