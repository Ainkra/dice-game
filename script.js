//#####################
//  DÉS:
//
//  <i class="fa-solid fa-dice-one"></i>
//  <i class="fa-solid fa-dice-two"></i>
//  <i class="fa-solid fa-dice-three"></i>
//  <i class="fa-solid fa-dice-four"></i>
//  <i class="fa-solid fa-dice-five"></i>
//  <i class="fa-solid fa-dice-six"></i>
//#####################

let players = [
    document.querySelector(".player1"),
    document.querySelector(".player2")
];

var scores = [
    document.querySelector(".score1"),
    document.querySelector(".score2")
];

var points = [
    document.querySelector(".point1"),
    document.querySelector(".point2")
]

var playerTurn = 0;

let reload = document.querySelector(".reload").addEventListener("click", () => {
    Init();
    console.log("La partie a bien été redémarrée !");
});

function Init() {
    scores[0].innerHTML  = 0;
    scores[1].innerHTML  = 0;
    points[0].innerHTML  = 0;
    points[1].innerHTML  = 0;
    playDice.innerHTML = "?"
}

let playDice = document.querySelector("#playdice");

playDice.addEventListener("click", () => {
    console.log("cliqué !")
    turnPlayerHandler();

    let diceRandomizerHandler = Math.floor(Math.random() * 7);
    console.log(`Le dé à été lancé ! On obtient: ${diceRandomizerHandler}`);

    if(playerTurn === 0) {
        switch(diceRandomizerHandler) {
            case 1:
                playDice.innerHTML = '<i class="fa-solid fa-dice-one"></i>';
                scores[0].innerHTML = `${+1}`;
                break;
            case 2:
                playDice.innerHTML = '<i class="fa-solid fa-dice-two"></i>';
                scores[0].innerHTML = `${+2}`;
                break;
            case 3:
                playDice.innerHTML = '<i class="fa-solid fa-dice-three"></i>';
                scores[0].innerHTML = `${+3}`;
                break;
            case 4:
                playDice.innerHTML = '<i class="fa-solid fa-dice-four"></i>';
                scores[0].innerHTML = `${+4}`;
                break;
            case 5:
                playDice.innerHTML = '<i class="fa-solid fa-dice-five"></i>';
                scores[0].innerHTML = `${+5}`;
                break;
            case 6:
                playDice.innerHTML = '<i class="fa-solid fa-dice-six"></i>';
                scores[0].innerHTML = `${+6}`;
                break;
        }

    } else if(playerTurn === 1) {
            switch(diceRandomizerHandler) {
                case 1:
                    playDice.innerHTML = '<i class="fa-solid fa-dice-one"></i>';
                    scores[1].innerHTML = `${+1}`;
                    break;
                case 2:
                    playDice.innerHTML = '<i class="fa-solid fa-dice-two"></i>';
                    scores[1].innerHTML = `${+2}`;
                    break;
                case 3:
                    playDice.innerHTML = '<i class="fa-solid fa-dice-three"></i>';
                    scores[1].innerHTML = `${+3}`;
                    break;
                case 4:
                    playDice.innerHTML = '<i class="fa-solid fa-dice-four"></i>';
                    scores[1].innerHTML = `${+4}`;
                    break;
                case 5:
                    playDice.innerHTML = '<i class="fa-solid fa-dice-five"></i>';
                    scores[1].innerHTML = `${+5}`;
                    break;
                case 6:
                    playDice.innerHTML = '<i class="fa-solid fa-dice-six"></i>';
                    scores[1].innerHTML = `${+6}`;
                    break;
            }
    }
})


function turnPlayerHandler() {
    if(playerTurn !== 0) {
        playerTurn = 0;
        console.log("Au tour du premier joueur !")
    } else if(playerTurn !== 1) {
        playerTurn = 1;
        console.log("Au tour du deuxième joueur !")
    }

    console.log(playerTurn)
}






