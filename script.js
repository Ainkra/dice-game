//#####################
//  RESSOURCES:
//
//  <i class="fa-solid fa-dice-one"></i>
//  <i class="fa-solid fa-dice-two"></i>
//  <i class="fa-solid fa-dice-three"></i>
//  <i class="fa-solid fa-dice-four"></i>
//  <i class="fa-solid fa-dice-five"></i>
//  <i class="fa-solid fa-dice-six"></i>
//#####################


//#####################
//  SCORES QUERY SELECTORS
//#####################

var round = [
    document.querySelector(".round1"),
    document.querySelector(".round2")
];

var global = [
    document.querySelector(".global1"),
    document.querySelector(".global2")
];

var globalScore = [
    0,
    0
]

var randomizer;

/*###############
BUTTONS SELECTORS
#################*/

let playDice = document.querySelector("#playdice");
let hold = document.querySelector(".hold");
let cardone = document.querySelector(".cardone");
let cardtwo = document.querySelector(".cardtwo")
let cardtitle = document.querySelector(".card-title")

/*###############
    AUDIO
#################*/

var diceAudio = new Audio('dice.mp3');

//#####################
//  INIT FUNCTION
//#####################
function Init() {
    round[0].innerHTML   = 0;
    round[1].innerHTML   = 0;
    global[0].innerHTML  = 0;
    global[1].innerHTML  = 0;
    playDice.innerHTML   = "?";
    randomizer = 0;
    playerTurn = 0;
    globalScore[0] = 0;
    globalScore[1] = 0;
}

Init();

//#####################
//  TURN STORER
//#####################

var playerTurn = 0;

//#####################
//  RESTART THE GAME
//#####################

let reload = document.querySelector(".reload").addEventListener("click", () => {
    Init();
    console.log("La partie a bien été redémarrée !");
});

//#####################
//    DICE ROLLING
//#####################
setInterval(
    playDice.addEventListener("click", () => {
        diceAudio.play();
        randomizer =  Math.floor(Math.random() * 6) + 1; // randomizing result for the dice. +1 because we don't want 0.
    
        console.log(`Chiffre obtenu: ${randomizer}`);
    
        switch(randomizer) {
            case 1:
                if(playerTurn === 0) {
                    playDice.innerHTML = '<i class="fa-solid fa-dice-one"></i>';
                    round[0].innerHTML = 0; // DOM add dice img.
                    playerTurn = 1;
                    randomizer = 0;
                    console.log("Au tour du deuxième joueur !")
                } 
                
                if(playerTurn === 1) {
                    playDice.innerHTML = '<i class="fa-solid fa-dice-one"></i>';
                    round[1].innerHTML = 0; // DOM add dice img.
                    playerTurn = 0;
                    randomizer = 0;
                    console.log("Au tour du premier joueur !")
                }
                break;
    
            case 2:
                if(playerTurn === 0) {
                    playDice.innerHTML = '<i class="fa-solid fa-dice-two"></i>'; // DOM add dice img.
                    round[0].innerHTML = 2;
                } 
                
                if(playerTurn === 1) {
                    playDice.innerHTML = '<i class="fa-solid fa-dice-two"></i>'; // DOM add dice img.
                    round[1].innerHTML = 2;
                }
                break;
    
            case 3:
                if(playerTurn === 0) {
                    playDice.innerHTML = '<i class="fa-solid fa-dice-three"></i>'; // DOM add dice img.
                    round[0].innerHTML = 3;
                } 
                
                if(playerTurn === 1) {
                    playDice.innerHTML = '<i class="fa-solid fa-dice-three"></i>'; // DOM add dice img.
                    round[1].innerHTML = 3;
                }
                break;
    
            case 4:
                if(playerTurn === 0) {
                    playDice.innerHTML = '<i class="fa-solid fa-dice-four"></i>'; // DOM add dice img.
                    round[0].innerHTML = 4;
                }
                
                if(playerTurn === 1) {
                    playDice.innerHTML = '<i class="fa-solid fa-dice-four"></i>'; // DOM add dice img.
                    round[1].innerHTML = 4;
                }
                break;
    
            case 5:
                if(playerTurn === 0) {
                    playDice.innerHTML = '<i class="fa-solid fa-dice-five"></i>'; // DOM add dice img.
                    round[0].innerHTML = 5;
                } 
                
                if(playerTurn === 1) {
                    playDice.innerHTML = '<i class="fa-solid fa-dice-five"></i>'; // DOM add dice img.
                    round[1].innerHTML = 5;
                }
                break;
    
            case 6:
                if(playerTurn === 0) {
                    playDice.innerHTML = '<i class="fa-solid fa-dice-six"></i>'; // DOM add dice img.
                    round[0].innerHTML = 6;
                } 
                
                if(playerTurn === 1) {
                    playDice.innerHTML = '<i class="fa-solid fa-dice-six"></i>'; // DOM add dice img.
                    round[1].innerHTML = 6;
                }
    
                break;
        }
    })
, 3000);


//#####################
//  HOLD ROUND POINT
//#####################

// background-color: rgba(44, 44, 44, 0.2); Not your turn
// background-color: rgba(0, 255, 157, 0.2); your turn
hold.addEventListener("click", () =>  {

    if(playerTurn === 0) {
        globalScore[0] = globalScore[0] += randomizer;
        global[0].textContent = globalScore[0];
        randomizer = 0;
        round[0].innerHTML = 0;
        playerTurn = 1;
        cardtitle.style.backgroundColor = "rgba(0, 255, 157, 0.2);";
        cardone.style.backgroundColor = "rgba(44, 44, 44, 0.2)";

        console.log("Au tour du deuxième joueur !");
    } else if (playerTurn === 1) {
        globalScore[1] = globalScore[1] += randomizer;
        global[1].textContent = globalScore[1];
        round[1].innerHTML = 0;
        randomizer = 0;
        playerTurn = 0;
        cardtitle.style.backgroundColor = "rgba(0, 255, 157, 0.2);";
        cardtwo.style.backgroundColor = "rgba(44, 44, 44, 0.2)";
        console.log("Au tour du premier joueur !")
    }
});

//#####################
//      END GAME
//#####################

function End() {
    if(globalScore[0] || globalScore[1] >= 100) {
    
    }
}

/*
NOTES:

Voir pour changer la couleur de fond pour chaque joueur
entrain de jouer.
*/