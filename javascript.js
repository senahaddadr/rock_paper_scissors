let choices = ["rock", "paper", "scissors"];    
const message = document.createElement('div');
message.style.backgroundColor = "yellow"
document.body.appendChild(message)

function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (choices.indexOf(playerSelection.toLowerCase()) >= 0) {
        if (playerSelection.toLowerCase()==="rock" && computerSelection==="paper" || playerSelection.toLowerCase()==="paper" 
        && computerSelection==="scissors" || playerSelection.toLowerCase()==="scissors" && computerSelection==="rock") {
            return(`You lose! ${computerSelection} beats ${playerSelection}`);
        } else if (playerSelection.toLowerCase()==="paper" && computerSelection==="rock" || playerSelection.toLowerCase()==="rock" 
        && computerSelection==="scissors" || playerSelection.toLowerCase()==="scissors" && computerSelection==="paper") {
            return(`You win! ${playerSelection} beats ${computerSelection}`);
        } else {
            return ("It's a tie!");
        }
    } else {
        const playerSelection = prompt("Rock, Paper, or Scissors?", "Rock");
        alert("Wrong input! Try again.");
        return (playRound(playerSelection, computerSelection));
    }
}  

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener ('click', () => {
        message.textContent = playRound(button.id, getComputerChoice())});
});

// function game() {
//     for (i=1; i<5; i++) {
//         const playerSelection = prompt("Rock, Paper, or Scissors?", "Rock");
//         console.log(playRound(playerSelection, computerSelection));
//     }
// }

// game()