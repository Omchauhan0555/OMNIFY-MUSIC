let plaMainImg=document.querySelector(".Plach")
plaMainImg.style.width='300px'
plaMainImg.style.height='300px'
let compMainImg=document.querySelector(".Compch")
compMainImg.style.width='300px'
compMainImg.style.height='300px'

let plaChoRock=document.querySelector(".plrock")
let plaChoPaper=document.querySelector(".plpaper")
let plaChoScissor=document.querySelector(".plscissor")
let chick=document.querySelector(".jeet")

let compChoRock=document.querySelector(".comprock")
let compChoPaper=document.querySelector(".comppaper")
let compChoScissor=document.querySelector(".compscissor")

let myScore=document.querySelector(".plsc")
let compScore=document.querySelector(".clsc")

let winner=document.querySelector(".win")
let newGame=document.querySelector(".new")
let YourScore=0;
let CScore=0;

plaChoRock.addEventListener("click",()=>{
    let ran=parseInt(Math.random()*(4-1)+1);
    plaMainImg.setAttribute("src","rock.png")
    if (ran==1) {
        compMainImg.setAttribute("src","rock.png")    
        winner.innerHTML="Draw"   
    }
    else if(ran==2){
       compMainImg.setAttribute("src","paper.png")
       CScore=CScore+1
       compScore.innerHTML=CScore;
       winner.innerHTML="Computer Won"
       if (CScore==3) {
        chick.classList.remove("vis")
        newGame.classList.remove("vis")
        chick.innerHTML="COMPUTER BEATS YOU"
    }
    else if( YourScore==3){
        chick.classList.remove("vis")
        newGame.classList.remove("vis")
        chick.innerHTML="YOU BEATS COMPUTER"
    }
    else {
        chick.innerHTML="Draw"
    }
    }
    else if(ran==3){
        compMainImg.setAttribute("src","scissor.png")
        YourScore=YourScore+1
        myScore.innerHTML=YourScore;
        winner.innerHTML="You Won"
        if (CScore==3) {
            chick.classList.remove("vis")
            newGame.classList.remove("vis")
            chick.innerHTML="COMPUTER BEATS YOU"
        }
        else if( YourScore==3){
            chick.classList.remove("vis")
            newGame.classList.remove("vis")
            chick.innerHTML="YOU BEATS COMPUTER"
        }
        else {
            chick.innerHTML="Draw"
        }
    
    }
    else{console.log("invalid input")}
})


plaChoPaper.addEventListener("click",()=>{
    let ran=parseInt(Math.random()*(4-1)+1);
    plaMainImg.setAttribute("src","paper.png")
    if (ran==1) {
        compMainImg.setAttribute("src","rock.png")    
        YourScore=YourScore+1;
        myScore.innerHTML=YourScore;
        winner.innerHTML="You Won"  
        if (CScore==3) {
            chick.classList.remove("vis")
            newGame.classList.remove("vis")
            chick.innerHTML="COMPUTER BEATS YOU"
        }
        else if( YourScore==3){
            chick.classList.remove("vis")
            newGame.classList.remove("vis")
            chick.innerHTML="YOU BEATS COMPUTER"
        }
        else {
            chick.innerHTML="Draw"
        } 
    }
    else if(ran==2){
       compMainImg.setAttribute("src","paper.png")
       winner.innerHTML="Draw"
    }
    else if(ran==3){
        compMainImg.setAttribute("src","scissor.png")
        CScore=CScore+1
       compScore.innerHTML=CScore;
       winner.innerHTML="Computer Won"
       if (CScore==3) {
        chick.classList.remove("vis")
        newGame.classList.remove("vis")
        chick.innerHTML="COMPUTER BEATS YOU"
    }
    else if( YourScore==3){
        chick.classList.remove("vis")
        newGame.classList.remove("vis")
        chick.innerHTML="YOU BEATS COMPUTER"
    }
    else {
        chick.innerHTML="Draw"
    }
      
    }
    else{console.log("invalid input")}
})


plaChoScissor.addEventListener("click",()=>{
    let ran=parseInt(Math.random()*(4-1)+1);
    plaMainImg.setAttribute("src","scissor.png")
    if (ran==1) {
        compMainImg.setAttribute("src","rock.png")    
        CScore=CScore+1
       compScore.innerHTML=CScore;
       winner.innerHTML="Computer Won" 
       if (CScore==3) {
        chick.classList.remove("vis")
        newGame.classList.remove("vis")
        chick.innerHTML="COMPUTER BEATS YOU"
    }
    else if( YourScore==3){
        chick.classList.remove("vis")
        newGame.classList.remove("vis")
        chick.innerHTML="YOU BEATS COMPUTER"
    }
    else {
        chick.innerHTML="Draw"
    }
    }
    else if(ran==2){
       compMainImg.setAttribute("src","paper.png")
       YourScore=YourScore+1
       myScore.innerHTML=YourScore;
       winner.innerHTML="You Won"
       if (CScore==3) {
        chick.classList.remove("vis")
        newGame.classList.remove("vis")
        chick.innerHTML="COMPUTER BEATS YOU"
    }
    else if( YourScore==3){
        chick.classList.remove("vis")
        newGame.classList.remove("vis")
        chick.innerHTML="YOU BEATS COMPUTER"
    }
    else {
        chick.innerHTML="Draw"
    }
    }
    else if(ran==3){
        compMainImg.setAttribute("src","scissor.png")
        winner.innerHTML="Draw"
    }
    else{console.log("invalid input")}
     
})

