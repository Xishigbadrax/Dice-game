// Идэвхитэй тоглогчийн дугаар 
var activePlayer=0;
// Ээлжийн оноо
var roundScore = 0;
// цуглуулсан оноо
var score_0=0;
var score_1=0;
//Тоглоом дууссан эсэхийг шалгах төлөвийн хувьсагч
var isGameOver;
//Тоглоомыг эхлэхэд бэлдэх
ehleh()
function ehleh(){
    isGameOver=false;
document.getElementById("score-0").innerHTML= 0;
document.getElementById("score-1").innerHTML= 0;
document.getElementById("current-0").innerHTML=0;
document.getElementById("current-1").innerHTML=0;
document.querySelector(".dice").style="display:none";
}
// Шоог шидэх үйлдэл
document.querySelector(".btn-roll").addEventListener("click",function(){
    if(isGameOver=== false){
    diceNumber = Math.floor((Math.random() * 6)+1);
    document.querySelector(".dice").src= "dice-"+diceNumber +".png";
    document.querySelector(".dice").style= "display:block";
    if(diceNumber!==1){
        // Нэгээс ялгаатай буувал Ээлжийн оноо нь дээр нэмнэ
        roundScore=roundScore+diceNumber;
        document.getElementById("current-"+activePlayer).innerHTML=roundScore;
    }
    //1 буувал ээлжийн оноог 0 болгож тоглогчийн ээлжийг сольно
    else{
        roundScore=0;
        document.getElementById("current-"+activePlayer).innerHTML=roundScore;
        if(activePlayer!==0){
            activePlayer=0
            document.querySelector(".player-0-panel").classList="player-0-panel active";
            document.querySelector(".player-1-panel").classList="player-1-panel";
        }
        else{
            activePlayer=1
            document.querySelector(".player-0-panel").classList="player-0-panel";
            document.querySelector(".player-1-panel").classList="player-1-panel active";
        }

    }
}
else alert("Тоглоом дууссан байна. NEW GAME товчийг дарж дахин эхлэн үү")
} )
//hold товч ажиллуулах
document.querySelector(".btn-hold").addEventListener("click", function(){
    if(isGameOver===false){

    if(activePlayer!==1){
    score_0=score_0+roundScore;
    document.getElementById("score-0").innerHTML=score_0;
    roundScore=0;
    document.getElementById("current-0").textContent=roundScore;
    activePlayer=1;
    document.querySelector(".player-0-panel").classList="player-0-panel ";
    document.querySelector(".player-1-panel").classList="player-1-panel active";
    
    }
    else{
        score_1=score_1+roundScore;
    document.getElementById("score-1").innerHTML=score_1;
    roundScore=0;
    document.getElementById("current-1").textContent=roundScore;
    activePlayer=0;
    document.querySelector(".player-0-panel").classList="player-0-panel active ";
    document.querySelector(".player-1-panel").classList="player-1-panel ";
    }
    duus();
}
else{
    alert("Тоглоом дууссан байна. NEW GAME товчийг дарж дахин эхлэн үү")
}
})
// NEW GAME товчийг хийх
document.querySelector(".btn-new").addEventListener("click", function(){
    isGameOver=false;
    document.getElementById("score-0").innerHTML= 0;
document.getElementById("score-1").innerHTML= 0;
document.getElementById("current-1").innerHTML=0;
document.getElementById("current-0").innerHTML=0;
document.querySelector(".dice").style="display:none";
score_0=0;
score_1=0;
roundScore=0;
});
// 100 хүрвэл дуусах хэсэг

function duus(){
if(score_0>=10){
    isGameOver=true
    document.getElementById("name-0").textContent="WINNER!!!"
    alert("Тоглогч 1 яллаа. NEW GAME товчийг дарж шинээр эхлэн үү")
    
}
if(score_1>=10){
    isGameOver=true
    document.getElementById("name-1").textContent="WINNER!!!"
    alert("Тоглогч 2 яллаа. NEW GAME товчийг дарж шинээр эхлэн үү")
    
}
}