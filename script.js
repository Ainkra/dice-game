//#####################
//  SCORES QUERY SELECTORS
//#####################
const round = [ // Select rounds score
    document.querySelector(".round1"),
    document.querySelector(".round2")
];

const global = [ // Select globals score
    document.querySelector(".global1"),
    document.querySelector(".global2")
];

let globalScore = [0, 0]; // globalscore storage
let roundScore = [0, 0];  // roundscore storage
let playerTurn = 0;       // playerturn storage
let randomizer;           // randomizer storage

/*###############
BUTTONS SELECTORS
#################*/
const playDice  = document.querySelector(".playdice"); // Select the dice
const hold      = document.querySelector(".hold");     // Select hold button
const cardone   = document.querySelector(".cardone");  // Select first card
const cardtwo   = document.querySelector(".cardtwo")   // Select second card

/*###############
    AUDIO
#################*/
const diceAudio = new Audio('./sounds/dice.mp3'); // Dice sound 
const winAudio = new Audio('./sounds/win.mp3');   // Win sound

//#####################
//  INIT FUNCTION
//#####################
function Init() { // Allow init the game.
  round[0].innerHTML   = 0;
  round[1].innerHTML   = 0;
  global[0].innerHTML  = 0;
  global[1].innerHTML  = 0;
  playDice.innerHTML   = "?";
  randomizer           = 0;
  playerTurn           = 0;
  globalScore[0]       = 0;
  globalScore[1]       = 0;
  roundScore[0]        = 0;
  roundScore[1]        = 0;
  cardone.classList.remove("bg-success");
}

Init(); // Call game init

//#####################
//      END GAME
//#####################
function ClearGame() { // Allows to remove the losing player's background
  cardone.classList.remove("bg-danger");
  cardtwo.classList.remove("bg-danger");
}

function Refresh() { // Refresh the page
  location.reload();
}

function End() { // End the game
  if(globalScore[0] >= 100)  { 
    cardtwo.classList.add("bg-danger"); // Add red background at second player
    cardone.classList.add("bg-success"); // Add green background at first player
    winAudio.play(); // Play win sound
    setTimeout(Refresh, 3000); // Refresh the page in 3 seconds
// etc..
  } else if(globalScore[1] >= 100) {
    cardone.classList.add("bg-danger");
    cardtwo.classList.add("bg-success");
    winAudio.play();
    setTimeout(Refresh, 3000);
  }
}

//#####################
//  RESTART THE GAME
//#####################
let reload = document.querySelector(".reload").addEventListener("click", () => { // Reload handler
  location.reload();
});

//#####################
//    DICE ROLLING
//#####################
playDice.addEventListener("click", () => {
    randomizer =  Math.floor(Math.random() * 6) + 1; // randomizing result for the dice.    

    switch(randomizer) {
        case 1:
            if(playerTurn === 0) {
                playDice.innerHTML = '<i class="fa-solid fa-dice-one"></i>'; // inner dice fas-fa
                round[0].innerHTML = 0; // DOM add dice img.
                roundScore[0] = 0; // reset roundscore
                playerTurn = 1; // Turn change
                randomizer = 0; // Reset randomizer
                cardtwo.classList.add("bg-success") // Change bg color
                cardone.classList.remove("bg-success")
            } else {
                playDice.innerHTML = '<i class="fa-solid fa-dice-one"></i>';
                round[1].innerHTML = 0; // DOM add dice img.
                roundScore[1] = 0;
                playerTurn = 0;
                randomizer = 0;
                cardone.classList.add("bg-success")
                cardtwo.classList.remove("bg-success")
            }
            break;
            
        case 2:
            if(playerTurn === 0) {
                playDice.innerHTML = '<i class="fa-solid fa-dice-two"></i>'; // DOM add dice img.
                diceAudio.play();
            } else {
                playDice.innerHTML = '<i class="fa-solid fa-dice-two"></i>'; // DOM add dice img.
                diceAudio.play();
            }
            break;
            
        case 3:
            if(playerTurn === 0) {
                playDice.innerHTML = '<i class="fa-solid fa-dice-three"></i>'; // DOM add dice img.
                diceAudio.play();
            } else {
                playDice.innerHTML = '<i class="fa-solid fa-dice-three"></i>'; // DOM add dice img.
                diceAudio.play();
            }
            break;

        case 4:
            if(playerTurn === 0) {
                playDice.innerHTML = '<i class="fa-solid fa-dice-four"></i>'; // DOM add dice img.
                diceAudio.play();
            } else {
                playDice.innerHTML = '<i class="fa-solid fa-dice-four"></i>'; // DOM add dice img.
                diceAudio.play();
            }
            break;

        case 5:
            if(playerTurn === 0) {
                playDice.innerHTML = '<i class="fa-solid fa-dice-five"></i>'; // DOM add dice img.
                diceAudio.play();
            } else {
                playDice.innerHTML = '<i class="fa-solid fa-dice-five"></i>'; // DOM add dice img.
                diceAudio.play();
            }

            break;

        case 6:
            if(playerTurn === 0) {
                playDice.innerHTML = '<i class="fa-solid fa-dice-six"></i>'; // DOM add dice img.
                diceAudio.play();
            } else {
                playDice.innerHTML = '<i class="fa-solid fa-dice-six"></i>'; // DOM add dice img.
                diceAudio.play();
            }

            break;
    }

    if (playerTurn === 0) {
      roundScore[0] = roundScore[0] + randomizer; // accumulate rounds
      round[0].innerHTML = roundScore[0]; // Display score
    } else {
      roundScore[1] = roundScore[1] + randomizer;
      round[1].innerHTML = roundScore[1];
    }
})

//#####################
//  HOLD ROUND POINT
//#####################
hold.addEventListener("click", () =>  {
    if(playerTurn === 0) {
        globalScore[0] = globalScore[0] += roundScore[0]; // Add round at global
        global[0].textContent = globalScore[0]; // Display global score
        randomizer = 0; // Reset randomizer
        round[0].innerHTML = 0; // Display 0 for round
        playerTurn = 1; // Change player turn
        cardtwo.classList.add("bg-success"); // green bg at player's turn
        cardone.classList.remove("bg-success"); // remove green bg to the player of the previous round
        playDice.innerHTML = '?'; // Display ? on the dice
        roundScore[0] = 0; // Reset roundscore
    } else {
        globalScore[1] = globalScore[1] += roundScore[1];
        global[1].textContent = globalScore[1];
        round[1].innerHTML = 0;
        randomizer = 0;
        playerTurn = 0;
        cardtwo.classList.remove("bg-success");
        cardone.classList.add("bg-success");
        playDice.innerHTML = '?';
        roundScore[1] = 0;
    }

    End(); // call End function
});