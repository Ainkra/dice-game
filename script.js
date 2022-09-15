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

let reload = document.querySelector(".reload");

let globalScore = [0, 0]; // globals-core storage
let roundScore = [0, 0];  // rounds-core storage
let playerTurn = 0;       // player turn storage
let randomizer;           // randomizer storage

/*###############
BUTTONS SELECTORS
#################*/
const playDice  = document.querySelector(".playdice"); // Select the dice
const hold      = document.querySelector(".hold");     // Select hold button
const cardOne   = document.querySelector(".cardone");  // Select first card
const cardTwo   = document.querySelector(".cardtwo")   // Select second card

/*###############
    AUDIO
#################*/
const diceAudio = new Audio('./resources/sounds/dice.mp3'); // Dice sound 
const winAudio = new Audio('./resources/sounds/win.mp3');   // Win sound

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
  cardOne.classList.remove("bg-success"); // Add green background at first player
  cardOne.classList.remove("bg-danger"); // Add green background at first player
  cardTwo.classList.remove("bg-danger"); // Add red background at second player
  cardTwo.classList.remove("bg-success"); // Add red background at second player
}

//#####################
//      END GAME
//#####################

function End() { // End the game
  if(globalScore[0] >= 100)  { 
    cardTwo.classList.add("bg-danger"); // Add red background at second player
    cardOne.classList.add("bg-success"); // Add green background at first player
    winAudio.play(); // Play win sound
    setTimeout(Init, 3000); // Refresh the page in 3 seconds
// etc.
  } else if(globalScore[1] >= 100) {
    cardOne.classList.add("bg-danger");
    cardTwo.classList.add("bg-success");
    winAudio.play();
    setTimeout(Init, 3000);
  }
}

//#####################
//  RESTART THE GAME
//#####################

reload.addEventListener("click", () => { // Reload handler
  Init();
});

//#####################
//    DICE ROLLING
//#####################
playDice.addEventListener("click", () => {
    randomizer =  Math.floor(Math.random() * 6) + 1; // randomize result for the dice.

    switch(randomizer) {
        case 1:
            if(playerTurn === 0) {
                playDice.innerHTML = '<i class="fa-solid fa-dice-one"></i>'; // inner dice fas-fa
                round[0].innerHTML = 0; // DOM add dice img.
                roundScore[0] = 0; // reset player roundscore
                playerTurn = 1; // Turn change
                randomizer = 0; // Reset randomizer
                cardTwo.classList.add("bg-success") // Change bg color
                cardOne.classList.remove("bg-success")
            } else {
                playDice.innerHTML = '<i class="fa-solid fa-dice-one"></i>';
                round[1].innerHTML = 0; // DOM add dice img.
                roundScore[1] = 0;
                playerTurn = 0;
                randomizer = 0;
                cardOne.classList.add("bg-success")
                cardTwo.classList.remove("bg-success")
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
        cardTwo.classList.add("bg-success"); // green bg at player's turn
        cardOne.classList.remove("bg-success"); // remove green bg to the player of the previous round
        playDice.innerHTML = '?'; // Display ? on the dice
        roundScore[0] = 0; // Reset roundscore
    } else {
        globalScore[1] = globalScore[1] += roundScore[1];
        global[1].textContent = globalScore[1];
        round[1].innerHTML = 0;
        randomizer = 0;
        playerTurn = 0;
        cardTwo.classList.remove("bg-success");
        cardOne.classList.add("bg-success");
        playDice.innerHTML = '?';
        roundScore[1] = 0;
    }

    End(); // call End function
});