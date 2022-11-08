let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (choices.indexOf(playerSelection.toLowerCase()) >= 0) {
        if (playerSelection.toLowerCase()==="rock" && computerSelection==="paper" || playerSelection.toLowerCase()==="paper" 
        && computerSelection==="scissors" || playerSelection.toLowerCase()==="scissors" && computerSelection==="rock") {
            return(`You lose! ${computerSelection} beats ${playerSelection}`)
        } else if (playerSelection.toLowerCase()==="paper" && computerSelection==="rock" || playerSelection.toLowerCase()==="rock" 
        && computerSelection==="scissors" || playerSelection.toLowerCase()==="scissors" && computerSelection==="paper") {
            return(`You win! ${playerSelection} beats ${computerSelection}`)
        } else {
            return ("It's a tie!");
        }
    } else {
        const playerSelection = prompt("Rock, Paper, or Scissors?", "Rock");
        alert("Wrong input! Try again.")
        return (playRound(playerSelection, computerSelection));
    }
}

function game() {
    for (i=1; i<5; i++) {
        const playerSelection = prompt("Rock, Paper, or Scissors?", "Rock");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game()