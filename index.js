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
let currentHumanScore = 0;
let currentComputerScore = 0;

const humanScoreElement = document.querySelector('.humanScore');
const computerScoreElement = document.querySelector('.computerScore');
humanScoreElement.textContent = currentHumanScore;
computerScoreElement.textContent = currentComputerScore;

let computerWins = 0;
const humanChoices = document.querySelectorAll('.human-choice-box');
humanChoices.forEach(function (humanChoice) {
    humanChoice.addEventListener("click", function(e) {
        let computerChoice = computerPlay();
        let result = playRound(humanChoice.dataset.choice, computerChoice);

        if(currentComputerScore == 5 || currentHumanScore == 5) {
            return;
        }

        if (result == 1) {
            currentHumanScore += 1;
            humanScoreElement.textContent = currentHumanScore;
        } else if (result == -1) {
            currentComputerScore += 1;
            computerScoreElement.textContent = currentComputerScore;
        }

        if (currentHumanScore == 5) {
            document.querySelector('.human p').textContent = "WINNER | Human | WINNER";
        } else if (currentComputerScore == 5) {
            document.querySelector('.human p').textContent = "WINNER | Human | WINNER";
        }
    })
});

