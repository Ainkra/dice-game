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

function updateDiceDisplay(diceNumber) {
    playDice.innerHTML = `<i class="fa-solid fa-dice-${diceNumber}"></i>`;
    diceAudio.play();
}

//#####################
//    DICE ROLLING
//#####################
playDice.addEventListener("click", () => {
    randomizer =  Math.floor(Math.random() * 6) + 1; // randomize result for the dice.
    console.log(randomizer);

    switch(randomizer) {
        case 1:
            if(playerTurn === 0) {
                updateDiceDisplay("one"); // inner dice fas-fa
                round[0].innerHTML = 0; // DOM add dice img.
                roundScore[0] = 0; // reset player roundscore
                playerTurn = 1; // Turn change
                randomizer = 0; // Reset randomizer
                cardTwo.classList.add("bg-success") // Change bg color
                cardOne.classList.remove("bg-success")
            } else {
                updateDiceDisplay("one");
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
                updateDiceDisplay("two"); // DOM add dice img.
                diceAudio.play();
            } else {
                updateDiceDisplay("two"); // DOM add dice img.
                diceAudio.play();
            }
            break;

        case 3:
            if(playerTurn === 0) {
                updateDiceDisplay("three"); // DOM add dice img.
                diceAudio.play();
            } else {
                updateDiceDisplay("three"); // DOM add dice img.
                diceAudio.play();
            }
            break;

        case 4:
            if(playerTurn === 0) {
                updateDiceDisplay("four"); // DOM add dice img.
                diceAudio.play();
            } else {
                updateDiceDisplay("four"); // DOM add dice img.
                diceAudio.play();
            }
            break;

        case 5:
            if(playerTurn === 0) {
                updateDiceDisplay("five"); // DOM add dice img.
                diceAudio.play();
            } else {
                updateDiceDisplay("five"); // DOM add dice img.
                diceAudio.play();
            }

            break;

        case 6:
            if(playerTurn === 0) {
                updateDiceDisplay("six"); // DOM add dice img.
                diceAudio.play();
            } else {
                updateDiceDisplay("six"); // DOM add dice img.
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

function updateScoresAndSwitchPlayer(currentPlayer) {
    globalScore[currentPlayer] += roundScore[currentPlayer];
    global[currentPlayer].textContent = globalScore[currentPlayer];
    round[currentPlayer].innerHTML = 0;
    randomizer = 0;
    roundScore[currentPlayer] = 0;
    playDice.innerHTML = '?';
    if(currentPlayer === 0) {
        cardTwo.classList.add("bg-success"); // green bg at player's turn
        cardOne.classList.remove("bg-success"); // remove green bg to the player of the previous round
    } else {
        cardTwo.classList.remove("bg-success");
        cardOne.classList.add("bg-success");
    }

    playerTurn = currentPlayer === 0 ? 1 : 0;
}

reload.addEventListener("click", () => { // Reload handler
    Init();
  });

hold.addEventListener("click", () =>  {
    if(playerTurn === 0) {
        updateScoresAndSwitchPlayer(0);
    } else {
        updateScoresAndSwitchPlayer(1);
    }

    End(); // call End function
});
