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
//  ALL QUERY SELECTORS
//#####################

var players = [
    document.querySelector(".player1"),
    document.querySelector(".player2")
];

var round = [
    document.querySelector(".round1"),
    document.querySelector(".round2")
];

var global = [
    document.querySelector(".global1"),
    document.querySelector(".global2")
]

let playDice = document.querySelector("#playdice");
let hold = document.querySelector(".hold")

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
//  INIT FUNCTION
//#####################

function Init() {
    round[0].innerHTML  = 0;
    round[1].innerHTML  = 0;
    global[0].innerHTML  = 0;
    global[1].innerHTML  = 0;
    playDice.innerHTML = "?"
}

//#####################
//  MAIN FUNCTION
//
// Handling the totality
// of the game.
//#####################

function Main() {
    let diceRandomizerHandler = Math.floor(Math.random() * 6) + 1; // randomizing result for the dice. +1 because we don't want 0.
    playDice.addEventListener("click", () => {
    console.log("cliqué !")

    console.log(`Le dé à été lancé ! On obtient: ${diceRandomizerHandler}`);
    
        switch(diceRandomizerHandler) {
            case 1:
                if(playerTurn === 0) {
                    playDice.innerHTML = '<i class="fa-solid fa-dice-one"></i>'; // DOM add dice img.
                    round[0].innerHTML = 1;
                } else if(playerTurn === 1) {
                    playDice.innerHTML = '<i class="fa-solid fa-dice-one"></i>'; // DOM add dice img.
                    round[1].innerHTML = 1;
                }
                break;
    
            case 2:
                if(playerTurn === 0) {
                    playDice.innerHTML = '<i class="fa-solid fa-dice-two"></i>'; // DOM add dice img.
                    round[0].innerHTML = 2;
                } else if(playerTurn === 1) {
                    playDice.innerHTML = '<i class="fa-solid fa-dice-two"></i>'; // DOM add dice img.
                    round[1].innerHTML = 2;
                }
                break;
    
            case 3:
                if(playerTurn === 0) {
                    playDice.innerHTML = '<i class="fa-solid fa-dice-three"></i>'; // DOM add dice img.
                    round[0].innerHTML = 3;
                } else if(playerTurn === 1) {
                    playDice.innerHTML = '<i class="fa-solid fa-dice-three"></i>'; // DOM add dice img.
                    round[1].innerHTML = 3;
                }
                break;
    
            case 4:
                if(playerTurn === 0) {
                    playDice.innerHTML = '<i class="fa-solid fa-dice-four"></i>'; // DOM add dice img.
                    round[0].innerHTML = 4;
                } else if(playerTurn === 1) {
                    playDice.innerHTML = '<i class="fa-solid fa-dice-four"></i>'; // DOM add dice img.
                    round[1].innerHTML = 4;
                }
                break;
    
            case 5:
                if(playerTurn === 0) {
                    playDice.innerHTML = '<i class="fa-solid fa-dice-five"></i>'; // DOM add dice img.
                    round[0].innerHTML = 5;
                } else if(playerTurn === 1) {
                    playDice.innerHTML = '<i class="fa-solid fa-dice-five"></i>'; // DOM add dice img.
                    round[1].innerHTML = 5;
                }
                break;
    
            case 6:
                if(playerTurn === 0) {
                    playDice.innerHTML = '<i class="fa-solid fa-dice-six"></i>'; // DOM add dice img.
                    round[0].innerHTML = 6;
                } else if(playerTurn === 1) {
                    playDice.innerHTML = '<i class="fa-solid fa-dice-six"></i>'; // DOM add dice img.
                    round[1].innerHTML = 6;
                }
                break;
        }
    });

    hold.addEventListener("click", () => {
        if(playerTurn !== 0) {
            global[1].innerHTML = ++diceRandomizerHandler;
            round[1].innerHTML = 0;
            console.log(global[1]);
            playerTurn = 0;
            console.log("Au tour du premier joueur !")
            
        } else if(playerTurn !== 1) {
            global[0].innerHTML = ++diceRandomizerHandler;
            round[0].innerHTML = 0;
            console.log(global[0]);
            playerTurn = 1;
            console.log("Au tour du deuxième joueur !")
        }
    })
}

Main();

//  <i class="fa-solid fa-dice-one"></i>
//  <i class="fa-solid fa-dice-two"></i>
//  <i class="fa-solid fa-dice-three"></i>
//  <i class="fa-solid fa-dice-four"></i>
//  <i class="fa-solid fa-dice-five"></i>
//  <i class="fa-solid fa-dice-six"></i>


//#####################
//  TURN CHANGER
//
// Get current turn, and
// Change them.
//#####################








