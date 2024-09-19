let allBox=document.querySelectorAll(".box")
let game=document.querySelector(".game")
let box1=document.querySelector(".box1")
let box2=document.querySelector(".box2")
let box3=document.querySelector(".box3")
let box4=document.querySelector(".box4")
let box5=document.querySelector(".box5")
let box6=document.querySelector(".box6")
let box7=document.querySelector(".box7")
let box8=document.querySelector(".box8")
let box9=document.querySelector(".box9")
let player1=document.querySelector(".play1")
let player2=document.querySelector(".play2")
let reset=document.querySelector(".reset")
let win=document.querySelector(".win")
let turn=0;
let rep=0;

allBox.forEach((box) => {
    box.addEventListener("click",function clickMe(){
    if (turn==0) {
        box.innerHTML="o"
        player1.style.backgroundColor="rgb(18,18,18)"
        player2.style.backgroundColor="black"
        turn=1
        rep++
        console.log(box.innerHTML)
    } 
    
    else {
        box.innerHTML="x"
        player1.style.backgroundColor="black"
        player2.style.backgroundColor="rgb(18,18,18)"
        turn=0 
        rep++
        console.log(box.innerHTML)   
    }
    

    if (box1.innerHTML==box2.innerHTML && box2.innerHTML==box3.innerHTML && box3.innerHTML=="o" || box4.innerHTML== box5.innerHTML && box5.innerHTML==box6.innerHTML && box6.innerHTML=="o" || box7.innerHTML==box8.innerHTML && box8.innerHTML==box9.innerHTML && box9.innerHTML=="o" || box1.innerHTML==box4.innerHTML && box4.innerHTML==box7.innerHTML && box7.innerHTML=="o" || box2.innerHTML==box5.innerHTML && box5.innerHTML==box8.innerHTML && box8.innerHTML=="o" || box3.innerHTML==box6.innerHTML && box6.innerHTML==box9.innerHTML && box9.innerHTML=="o" || box1.innerHTML==box5.innerHTML && box5.innerHTML==box9.innerHTML && box9.innerHTML=="o" || box3.innerHTML==box5.innerHTML && box5.innerHTML==box7.innerHTML && box7.innerHTML=="o" ) {
        win.classList.remove("hide")
        win.innerHTML="PLAYER 1 IS THE WINNER"
    }

    else if (box1.innerHTML==box2.innerHTML&&box2.innerHTML==box3.innerHTML&&box3.innerHTML=="x" || box4.innerHTML== box5.innerHTML&&box5.innerHTML==box6.innerHTML&&box6.innerHTML=="x" || box7.innerHTML==box8.innerHTML&&box8.innerHTML==box9.innerHTML&&box9.innerHTML=="x" || box1.innerHTML==box4.innerHTML&&box4.innerHTML==box7.innerHTML&&box7.innerHTML=="x" || box2.innerHTML==box5.innerHTML&&box5.innerHTML==box8.innerHTML&&box8.innerHTML=="x" || box3.innerHTML==box6.innerHTML&&box6.innerHTML==box9.innerHTML&&box9.innerHTML=="x" || box1.innerHTML==box5.innerHTML&&box5.innerHTML==box9.innerHTML&&box9.innerHTML=="x" || box3.innerHTML==box5.innerHTML&&box5.innerHTML==box7.innerHTML&&box7.innerHTML=="x" ){
        win.classList.remove("hide")
        win.innerHTML="PLAYER 2 IS THE WINNER"
    } 
    else if(rep==9){
        win.classList.remove("hide")
        win.innerHTML="DRAW"
    }

    else { }
    box.removeEventListener("click",clickMe)
    })

});



