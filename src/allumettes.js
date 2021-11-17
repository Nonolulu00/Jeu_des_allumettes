
let totalMatches = 50 ;
let matchesSelection = 0;
let removeMatchesStatus;
let playerOne = 1;
let rndInt = 0;
let matchesDiv = document.getElementById("allumettes");
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
displayMatches(totalMatches);

function playerChoice(event){
    let value = event.currentTarget.value;
    console.log(value);
    console.log("player 👩‍🦰");
    matchesSelection = parseInt(value);
    document.getElementById("print").innerHTML = "Vous avez choisi: " + matchesSelection;
    hideButtons();
    play();
    updateDisplay(matchesSelection);
    checkIfDisplayButtons(totalMatches)
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
    
    if ( totalMatches == 1 ){
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
    updateDisplay(rndInt);
    checkIfDisplayButtons(totalMatches)
    if ( totalMatches == 1) {
        alert(" ☠️ You loose ! Try again ☠️ ")
    }
    return;
};

function displayMatches(totalMatches){
   
    for (var i = 0; i < totalMatches; i++){
        var matchImage = document.createElement('img');
        matchImage.src = './images/Allumette.png';

        matchesDiv.appendChild(matchImage);
    }    
}

function updateDisplay(number){    
    for (var i=number-1; i>=0;i--){
        matchesDiv.removeChild(matchesDiv.childNodes[i]);
  } 
}

function checkIfDisplayButtons(totalMatches){
    let buttons = document.getElementById('choice');
    let button2 =document.getElementById('2');
    let button3 =document.getElementById('3');
    let button4 =document.getElementById('4');
    let button5 =document.getElementById('5');
    let button6 =document.getElementById('6');
    if(totalMatches < 6){
        button6.style.display="none";
    }
    if(totalMatches < 5){
        button5.style.display="none";
    }
    if(totalMatches < 4){
        button4.style.display="none";
    }
    if(totalMatches < 3){
        button3.style.display="none";
    }
    if(totalMatches < 2){
        button2.style.display="none";
    }
    else{
        buttons.style.display="initial"
    }
}

function hideButtons(){
    let buttons = document.getElementById('choice');
    buttons.style.display="none"
    console.log("appel")
}
