//#####################
// DÉS:
//
//  <i class="fa-solid fa-dice-one"></i>
//  <i class="fa-solid fa-dice-two"></i>
//  <i class="fa-solid fa-dice-three"></i>
//  <i class="fa-solid fa-dice-four"></i>
//  <i class="fa-solid fa-dice-five"></i>
//  <i class="fa-solid fa-dice-six"></i>
//#####################

//######DICE######
let diceRoll = document.querySelector('#playdice');

//####PLAYERONE####
let score1 = document.querySelector("score1");
let point1 = document.querySelector("point1");

//####PLAYERTWO####
let score2 = document.querySelector("score2");
let point2 = document.querySelector("point2");

//#####RELOAD#####

//############################
//         FUNCTIONS
//############################


diceRoll.addEventListener("click", () => {
    
    randomDice = Math.floor(Math.random() * 7);

    switch(randomDice) {
        case 1:
            diceRoll.innerHTML = '<i class="fa-solid fa-dice-one"></i>';
            console.log(randomDice);
            break;
        case 2:
            diceRoll.innerHTML = '<i class="fa-solid fa-dice-two"></i>';
            console.log(randomDice);
            break;
        case 3:
            diceRoll.innerHTML = '<i class="fa-solid fa-dice-three"></i>';
            console.log(randomDice);
            break;
        case 4:
            diceRoll.innerHTML = '<i class="fa-solid fa-dice-four"></i>';
            console.log(randomDice);
            break;
        case 5:
            diceRoll.innerHTML = '<i class="fa-solid fa-dice-five"></i>';
            console.log(randomDice);
            break;
        case 6:
            diceRoll.innerHTML = '<i class="fa-solid fa-dice-six"></i>';
            console.log(randomDice);
            break;
    }
});