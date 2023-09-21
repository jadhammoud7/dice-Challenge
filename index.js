var clicked=document.querySelector(".start-game");
clicked.addEventListener("click",function(){

    clicked.innerHTML="Play Again";
    
    var random1=Math.floor(Math.random()*6)+1;
    var random2=Math.floor(Math.random()*6)+1;
    
    document.querySelector(".img1").setAttribute("src","./images/dice"+random1+".png");
    document.querySelector(".img2").setAttribute("src","./images/dice"+random2+".png");
    
    if(random1>random2){
    document.querySelector(".container h1").innerHTML="Player One Wins!";
    }else if(random2>random1){
        document.querySelector(".container h1").innerHTML="Player Two Wins!";
    }else{
        document.querySelector(".container h1").innerHTML="Its a Draw";
    
    }
})



