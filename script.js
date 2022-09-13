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

let playDice  = document.querySelector("#playdice");
let hold      = document.querySelector(".hold");
let cardone   = document.querySelector(".cardone");
let cardtwo   = document.querySelector(".cardtwo")
let playerone = document.querySelector(".player1");
let playertwo = document.querySelector(".player2")

/*###############
    AUDIO
#################*/

var diceAudio = new Audio('./sounds/dice.mp3');
var winAudio = new Audio('./sounds/win.mp3');

//#####################
//  INIT FUNCTION
//#####################
function Init() {
    round[0].innerHTML   = 0;
    round[1].innerHTML   = 0;
    global[0].innerHTML  = 0;
    global[1].innerHTML  = 0;
    playDice.innerHTML   = "?";
    randomizer           = 0;
    playerTurn           = 0;
    globalScore[0]       = 0;
    globalScore[1]       = 0;
    cardone.classList.remove("bg-success");
}

Init();

//#####################
//  TURN STORER
//#####################

var playerTurn = 0;

//#####################
//      END GAME
//#####################

function ClearGame() {
  cardone.classList.remove("bg-danger");
  cardtwo.classList.remove("bg-danger");
}

function Refresh() {
  location.reload();
}

function End() {
  if(globalScore[0] >= 100)  {
    cardtwo.classList.add("bg-danger");
    cardone.classList.add("bg-success");
    winAudio.play();
    setTimeout(Refresh, 3000);
  } else if(globalScore[1] >= 100) {
    cardone.classList.add("bg-danger");
    cardtwo.classList.add("bg-success");
    winAudio.play();
    setTimeout(Refresh, 3000);
  }

  console.log("Redémarré !")

}

//#####################
//  RESTART THE GAME
//#####################

let reload = document.querySelector(".reload").addEventListener("click", () => {
  location.reload();
});

//#####################
//    DICE ROLLING
//#####################

    playDice.addEventListener("click", () => {

        randomizer =  Math.floor(Math.random() * 6) + 1; // randomizing result for the dice. +1 because we don't want 0.    
        console.log(`Chiffre obtenu: ${randomizer}`);
    
        switch(randomizer) {
            case 1:
                if(playerTurn === 0) {
                    playDice.innerHTML = '<i class="fa-solid fa-dice-one"></i>';
                    round[0].innerHTML = 0; // DOM add dice img.
                    playerTurn = 1;
                    randomizer = 0;
                    cardtwo.classList.add("bg-success")
                    cardone.classList.remove("bg-success")
                    console.log("Au tour du deuxième joueur !")

                } else if(playerTurn === 1) {
                    playDice.innerHTML = '<i class="fa-solid fa-dice-one"></i>';
                    round[1].innerHTML = 0; // DOM add dice img.
                    playerTurn = 0;
                    randomizer = 0;
                    cardone.classList.add("bg-success")
                    cardtwo.classList.remove("bg-success")
                    console.log("Au tour du premier joueur !")
                }
                break;
    
            case 2:
                if(playerTurn === 0) {
                    playDice.innerHTML = '<i class="fa-solid fa-dice-two"></i>'; // DOM add dice img.
                    round[0].innerHTML = 2;
                    diceAudio.play();
                } 
                
                if(playerTurn === 1) {
                    playDice.innerHTML = '<i class="fa-solid fa-dice-two"></i>'; // DOM add dice img.
                    round[1].innerHTML = 2;
                    diceAudio.play();
                }
                break;
    
            case 3:
                if(playerTurn === 0) {
                    playDice.innerHTML = '<i class="fa-solid fa-dice-three"></i>'; // DOM add dice img.
                    round[0].innerHTML = 3;
                    diceAudio.play();
                } 
                
                if(playerTurn === 1) {
                    playDice.innerHTML = '<i class="fa-solid fa-dice-three"></i>'; // DOM add dice img.
                    round[1].innerHTML = 3;
                    diceAudio.play();
                }
                break;
    
            case 4:
                if(playerTurn === 0) {
                    playDice.innerHTML = '<i class="fa-solid fa-dice-four"></i>'; // DOM add dice img.
                    round[0].innerHTML = 4;
                    diceAudio.play();
                }
                
                if(playerTurn === 1) {
                    playDice.innerHTML = '<i class="fa-solid fa-dice-four"></i>'; // DOM add dice img.
                    round[1].innerHTML = 4;
                    diceAudio.play();
                }
                break;
    
            case 5:
                if(playerTurn === 0) {
                    playDice.innerHTML = '<i class="fa-solid fa-dice-five"></i>'; // DOM add dice img.
                    round[0].innerHTML = 5;
                    diceAudio.play();
                } 
                
                if(playerTurn === 1) {
                    playDice.innerHTML = '<i class="fa-solid fa-dice-five"></i>'; // DOM add dice img.
                    round[1].innerHTML = 5;
                    diceAudio.play();
                }
                break;
    
            case 6:
                if(playerTurn === 0) {
                    playDice.innerHTML = '<i class="fa-solid fa-dice-six"></i>'; // DOM add dice img.
                    round[0].innerHTML = 6;
                    diceAudio.play();
                } 
                
                if(playerTurn === 1) {
                    playDice.innerHTML = '<i class="fa-solid fa-dice-six"></i>'; // DOM add dice img.
                    round[1].innerHTML = 6;
                    diceAudio.play();
                }
    
                break;
        }
    })


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
        cardtwo.classList.add("bg-success");
        cardone.classList.remove("bg-success");
        console.log("Au tour du deuxième joueur !");
        playDice.innerHTML = '?';
    } else if (playerTurn === 1) {
        globalScore[1] = globalScore[1] += randomizer;
        global[1].textContent = globalScore[1];
        round[1].innerHTML = 0;
        randomizer = 0;
        playerTurn = 0;
        cardtwo.classList.remove("bg-success");
        cardone.classList.add("bg-success");
        console.log("Au tour du premier joueur !");
        playDice.innerHTML = '?';
    }

    End();
});




/*
NOTES:

Voir pour changer la couleur de fond pour chaque joueur
entrain de jouer.
*/