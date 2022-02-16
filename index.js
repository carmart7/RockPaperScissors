function computerPlay() {
    //generate a randomnumber
    let randomNum = Math.floor(Math.random()*3);
    let choice;
    //return rock/paper/scissors based on number generated
    switch(randomNum){
        case 0:
            choice = "Rock";
            break;
        case 1:
            choice = "Paper";
            break;
        case 2:
            choice = "Scissors";
            break;
        default:
            choice = "Random Choice Failed!";
    }
    return choice;
}

function playRound(playerSelection, computerSelection){ 
    //make both selections lower case to prevent case problems
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    //if both selections are the same, return a tie
    if (playerSelection === computerSelection) {
        return 0;
    }else if (playerSelection==="rock"){ //return results when player chooses rock
        if (computerSelection==="paper"){
            return -1;
        }else if (computerSelection==="scissors"){
            return 1;
        }
    }else if (playerSelection==="paper"){ //return reults when player chooses paper
        if (computerSelection==="scissors"){
            return -1;
        }else if( computerSelection==="rock"){
            return 1;
        }
    }else if (playerSelection==="scissors") { //return results when player chooses scissors
        if (computerSelection==="rock") {
            return -1;
        }else if (computerSelection==="paper") {
            return 1;
        }
    }
}

// function game() {
//     let results = 0;
//     for (let i = 0; i < 5; i++) {
//         results += playRound(prompt("Will you choose rock. paper, or scissors?"), computerPlay());
//     }
//     if (results < 0) {
//         return "Turns out you can't beat a computer!";
//     }else {
//         return "You somehow won!";
//     }
// }
let humanWins = 0;
let computerWins = 0;
const humanChoices = document.querySelectorAll('.human-choice-box');
humanChoices.forEach(function (choice) {
    choice.addEventListener("click", function(e) { 
        console.log(choice.dataset.choice);
        console.log(playRound(choice.dataset.choice, computerPlay()));
    })
});

//create function that plays round and the result will modify scoreboard depending on who wins (this will be passed into the eventListener above as a CB function)