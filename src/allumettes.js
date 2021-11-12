
let totalMatches = 50 ;
let matchesSelection = 0;
let removeMatchesStatus;
let playerOne = 1;
let rndInt = 0;

function startGame(){
totalMatches = 50;
}    
startGame();

function initialize(){
    let buttons = document.getElementsByClassName("playerButton")
    for(let button of buttons){
        button.addEventListener('click', playerChoice)
    }
}

initialize() 

function playerChoice(event){
    let value = event.currentTarget.value;
    console.log(value);
    console.log("player 👩‍🦰");
    matchesSelection = parseInt(value);
    document.getElementById("print").innerHTML = "Vous avez choisi: " + matchesSelection;
    play();
    matchesSelection = 0;
    return;
};

function removeMatches(numberOfMatches){
    totalMatches -= numberOfMatches;
    console.log( " choix du joueur =  " + numberOfMatches + "Nombre d'allumettes restantes =" +totalMatches)
    return; 
};


function play(){
    removeMatches(matchesSelection);
    if ( totalMatches == 0 ){
        alert(" 🎊 Congrats you win ! 🎊 ")
    }else{
        setTimeout("robotPlay()", 2000);
    }
    
};

function robotPlay(){
    console.log("robot 🤖");
    if (totalMatches > 12) {
        rndInt = Math.floor(Math.random() * 6) + 1
    } else if (totalMatches == 12){
      rndInt = Math.floor(Math.random() * 5) + 1
    }else if (totalMatches == 11){
        rndInt = Math.floor(Math.random() * 4) + 1
    } else if (totalMatches == 10){
            rndInt = Math.floor(Math.random() * 3) + 1
    }else if (totalMatches == 9){
        rndInt = Math.floor(Math.random() * 2) + 1
    }else if (totalMatches == 8){
        rndInt = Math.floor(Math.random() * 1) + 1
    } else {
        rndInt = 1;
    }
    removeMatches(rndInt);
    if ( totalMatches == 0) {
        alert(" ☠️ You loose ! Try again ☠️ ")
    }
    return;
};