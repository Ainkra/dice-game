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

let scores = [
    document.querySelector(".score1"),
    document.querySelector(".score2")
];

let points = [
    document.querySelector(".point1"),
    document.querySelector(".point2")
]

let reload = document.querySelector(".reload").addEventListener("click", () => {
    Init();
});



function Init() {
    players[0].innerHTML = 0;
    players[1].innerHTML = 0;
    scores[0].innerHTML  = 0;
    scores[1].innerHTML  = 0;
    points[0].innerHTML  = 0;
    points[1].innerHTML  = 0;
}





