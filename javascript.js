let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase()==="rock" && computerSelection==="paper" || playerSelection.toLowerCase()==="paper" 
    && computerSelection==="scissors" || playerSelection.toLowerCase()==="scissors" && computerSelection==="rock") {
        return(`You lose! ${computerSelection} beats ${playerSelection}`)
    } 
    else if (playerSelection.toLowerCase()==="paper" && computerSelection==="rock" || playerSelection.toLowerCase()==="rock" 
    && computerSelection==="scissors" || playerSelection.toLowerCase()==="scissors" && computerSelection==="paper") {
        return(`You win! ${playerSelection} beats ${computerSelection}`)
    } 
    else {
        return ("It's a tie!");
    }
}

const playerSelection = prompt("Rock, Paper, or Scissors?", "Rock");
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));