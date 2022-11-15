let choices = ["rock", "paper", "scissors"];    
let player_score = 0;
let computer_score = 0;
const message = document.createElement('div');
const scoreboard = document.createElement('div')
const final = document.createElement('div')
message.style.backgroundColor = "yellow"
scoreboard.style.backgroundColor = "Red"
final.style.backgroundColor = "green"
document.body.appendChild(message)
document.body.appendChild(scoreboard)
document.body.appendChild(final)
final.textContent= "0"

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener ('click', () => {
        message.textContent = playRound(button.id, getComputerChoice())});
});

function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (choices.indexOf(playerSelection.toLowerCase()) >= 0) {
        if (playerSelection.toLowerCase()==="rock" && computerSelection==="paper" || playerSelection.toLowerCase()==="paper" 
        && computerSelection==="scissors" || playerSelection.toLowerCase()==="scissors" && computerSelection==="rock") {
            scoreboard.textContent = `player score: ${player_score} | computer score: ${++computer_score}`;
            if ((computer_score)==5) {
                final.textContent = "Computer is the winner!";
                player_score = 0;
                computer_score = 0;
            };
            return(`You lose! ${computerSelection} beats ${playerSelection}`);
            
        } else if (playerSelection.toLowerCase()==="paper" && computerSelection==="rock" || playerSelection.toLowerCase()==="rock" 
        && computerSelection==="scissors" || playerSelection.toLowerCase()==="scissors" && computerSelection==="paper") {
            scoreboard.textContent = `player score: ${++player_score} | computer score: ${computer_score}`;
            if (player_score==5) {
                final.textContent = "You are the winner!";
                player_score = 0;
                computer_score = 0;
            };
            return(`You win! ${playerSelection} beats ${computerSelection}`);
        } else {
            return ("It's a tie!");
        }
    } else {
        let playerSelection = prompt("Rock, Paper, or Scissors?", "Rock");
        alert("Wrong input! Try again.");
        return (playRound(playerSelection, computerSelection));
    }
}  



// function game() {
//     for (i=1; i<5; i++) {
//         const playerSelection = prompt("Rock, Paper, or Scissors?", "Rock");
//         console.log(playRound(playerSelection, computerSelection));
//     }
// }

// game()