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

playDice.addEventListener("click", () => {
    console.log("cliqué !")

    let diceRandomizerHandler = Math.floor(Math.random() * 6) + 1; // randomizing result for the dice. +1 because we don't want 0.
    console.log(`Le dé à été lancé ! On obtient: ${diceRandomizerHandler}`);

    if(playerTurn === 0) {
        switch(diceRandomizerHandler) {
            case 1:
                playDice.innerHTML = '<i class="fa-solid fa-dice-one"></i>'; // DOM add dice img.
                round[0].innerHTML = 1;
                break;
            case 2:
                playDice.innerHTML = '<i class="fa-solid fa-dice-two"></i>';
                round[0].innerHTML = 2;
                break;
            case 3:
                playDice.innerHTML = '<i class="fa-solid fa-dice-three"></i>';
                round[0].innerHTML = 3;
                break;
            case 4:
                playDice.innerHTML = '<i class="fa-solid fa-dice-four"></i>';
                round[0].innerHTML = 4;
                break;
            case 5:
                playDice.innerHTML = '<i class="fa-solid fa-dice-five"></i>';
                round[0].innerHTML = 5;
                break;
            case 6:
                playDice.innerHTML = '<i class="fa-solid fa-dice-six"></i>';
                round[0].innerHTML = 6;
                break;
        }

    } else if(playerTurn === 1) {
            switch(diceRandomizerHandler) {
                case 1:
                    playDice.innerHTML = '<i class="fa-solid fa-dice-one"></i>';
                    round[1].innerHTML = 1;
                    break;
                case 2:
                    playDice.innerHTML = '<i class="fa-solid fa-dice-two"></i>';
                    round[1].innerHTML = 2;
                    break;
                case 3:
                    playDice.innerHTML = '<i class="fa-solid fa-dice-three"></i>';
                    round[1].innerHTML = 3;
                    break;
                case 4:
                    playDice.innerHTML = '<i class="fa-solid fa-dice-four"></i>';
                    round[1].innerHTML = 4;
                    break;
                case 5:
                    playDice.innerHTML = '<i class="fa-solid fa-dice-five"></i>';
                    round[1].innerHTML = 5;
                    break;
                case 6:
                    playDice.innerHTML = '<i class="fa-solid fa-dice-six"></i>';
                    round[1].innerHTML = 6;
                    break;
            }
    }
})

//#####################
//  TURN CHANGER
//
// Get current turn, and
// Change them.
//#####################

hold.addEventListener("click", () => {
    if(playerTurn !== 0) {
        global[0] = diceRandomizerHandler;
        console.log(global[0]);
        playerTurn = 0;
        console.log("Au tour du premier joueur !")
        
    } else if(playerTurn !== 1) {
        global[1] = diceRandomizerHandler;
        console.log(global[1]);
        playerTurn = 1;
        console.log("Au tour du deuxième joueur !")
    }
})






