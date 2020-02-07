document.getElementById("score-0").innerHTML= 0;
document.getElementById("score-1").innerHTML= 0;
document.getElementById("current-0").innerHTML=0;
document.querySelector(".dice").style="display:none";
document.querySelector(".btn-roll").addEventListener("click",function(){
    diceNumber = Math.floor((Math.random() * 6)+1);
    console.log(diceNumber)
    document.querySelector(".dice").src= "dice-"+diceNumber +".png";
    document.querySelector(".dice").style= "display:block";
} )

