var numbersInCard=["0","1","2","3","4","5","6","7","8","9","p2","p4","W","R","S"];
var colorsForCards=["blue","yellow","red","green","black"];
var playerCardCount=0;
var computerCardCount=0;
var computerCardDraw="";
var currentOpenCardNumber="";
var currentOpenCardColor="";
function startGame(){
    document.getElementById('entryForm').innerHTML="";
    document.getElementById('gameView').style.display='block';
}
function drawCard(byWhom){
var randamNumber = numbersInCard[(Math.random() * numbersInCard.length) | 0];
var randColor = colorsForCards[(Math.random() * colorsForCards.length-1) | 0];
var changedRand;
if(randamNumber=="p4"){
    changedRand="+4";
    randColor = colorsForCards[(Math.random() * colorsForCards.length) | 0];
}else if(randamNumber=="p2"){
    changedRand="+2";
    randColor = colorsForCards[(Math.random() * colorsForCards.length) | 0];
}else if(randamNumber=="W"){
    changedRand=randamNumber;
    randColor = "black";
}else{
    changedRand=randamNumber;
}
if(byWhom=="playerCardView"){
    var variableFunctionCall="removeCardFromView('playerCard"+playerCardCount+"','"+changedRand+"','"+randColor+"')";
    document.getElementById('playerCardView').innerHTML+='<div class="card num-'+randamNumber+' '+randColor+'" id="playerCard'+playerCardCount+'"   onclick="'+variableFunctionCall+'"><span class="inner"><span class="mark">'+changedRand+'</span></span></div>';
playerCardCount++;
}else if(byWhom=="computerCardView"){
    var variableFunctionCall="removeCardFromView('computerCard"+computerCardCount+"','"+changedRand+"','"+randColor+"')";
    document.getElementById('computerCardView').innerHTML+='<div class="card num-'+randamNumber+' '+randColor+'" id="computerCard'+computerCardCount+'"   onclick="'+variableFunctionCall+'"><span class="inner"><span class="mark">'+changedRand+'</span></span></div>';
    computerCardCount++;
}
else if(byWhom=="openCard"){
    randColor = colorsForCards[(Math.random() * colorsForCards.length-1) | 0];
    currentOpenCardNumber=randamNumber;
    currentOpenCardColor=randColor;
document.getElementById('droppedCard').innerHTML='<div class="card num-'+randamNumber+' '+randColor+'"><span class="inner"><span class="mark">'+randamNumber+'</span></span></div>';
}
}
function execute(){
    document.getElementById('entryForm').innerHTML="";
    document.getElementById('gameView').style.display='block';
    drawCard("openCard");
    if(playerCardCount==0){
for(var i=0;i<7;i++){
    drawCard("playerCardView");
}
    }
    if(computerCardCount==0){
        for(var i=0;i<7;i++){
            drawCard("computerCardView");
        }
    }
}
function removeCardFromView(index,number,color){
    if(currentOpenCardColor==color||currentOpenCardNumber==number){
        droppedCardView(number,color);
        var remove=document.getElementById(index);
        remove.parentNode.removeChild(remove);
    }
}
function droppedCardView(dropNumber,dropColor){
    var printnumber="";
    if(dropNumber=="+2"){
        printnumber="p2";
    }else if(dropNumber=="+4"){
        printnumber="p4";
    }else{
        printnumber=dropNumber;
    }
    currentOpenCardNumber=dropNumber;
    currentOpenCardColor=dropColor ;
document.getElementById('droppedCard').innerHTML='<div class="card num-'+printnumber+' '+dropColor+'"><span class="inner"><span class="mark">'+dropNumber+'</span></span></div>';
}