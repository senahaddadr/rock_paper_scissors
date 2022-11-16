let choices = ["rock", "paper", "scissors"];    
let player_score = 0;
let computer_score = 0;
let gameOn = true;
const message = document.createElement('div');
const scoreboard = document.createElement('div')
const final = document.createElement('div')
const tryAgain = document.createElement('button')
message.style.backgroundColor = "yellow"
scoreboard.style.backgroundColor = "Red"
final.style.backgroundColor = "green"
document.body.appendChild(message)
document.body.appendChild(scoreboard)
document.body.appendChild(final)
document.body.appendChild(tryAgain)
tryAgain.textContent = "Try Again?";
tryAgain.addEventListener('click', reset)
tryAgain.style.display = "none";


const buttons = document.querySelectorAll('.choice');
buttons.forEach((button) => {
    button.addEventListener ('click', () => {
        message.textContent = playRound(button.id, getComputerChoice())});
});

function set() {
    scoreboard.textContent = 'player score: 0 | computer score: 0';
    final.textContent = "";
    tryAgain.style.display = "none";
    buttons.forEach((button) => {
        button.style.display = "inline";
    })
    message.style.display = "block"
    scoreboard.style.display = "block"
}

function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

function reset() {
    player_score = 0;
    computer_score = 0;
    gameOn = true;
    set()
}

function stopGame() {
    message.textContent = "";
    scoreboard.textContent = "";
    buttons.forEach((button) => {
        button.style.display = "none";
    })
    tryAgain.style.display = "block";
    gameOn = false;
}

function playRound(playerSelection, computerSelection) {
    while ((player_score||computer_score)!=5 && gameOn) {
        set()
        if (playerSelection.toLowerCase()==="rock" && computerSelection==="paper" || playerSelection.toLowerCase()==="paper" 
        && computerSelection==="scissors" || playerSelection.toLowerCase()==="scissors" && computerSelection==="rock") {
            scoreboard.textContent = `player score: ${player_score} | computer score: ${++computer_score}`;
            tryAgain.style.display = "none";
            if ((computer_score)==5) {
                stopGame();
                final.textContent = "Computer is the winner!";
                break;
            };
            return(`You lose! ${computerSelection} beats ${playerSelection}`);
            
        } else if (playerSelection.toLowerCase()==="paper" && computerSelection==="rock" || playerSelection.toLowerCase()==="rock" 
        && computerSelection==="scissors" || playerSelection.toLowerCase()==="scissors" && computerSelection==="paper") {
            scoreboard.textContent = `player score: ${++player_score} | computer score: ${computer_score}`;
            tryAgain.style.display = "none";
            if (player_score==5) {
                stopGame();
                final.textContent = "You are the winner!";
                break;
            };
            return(`You win! ${playerSelection} beats ${computerSelection}`);
        } else {
            scoreboard.textContent = `player score: ${player_score} | computer score: ${computer_score}`;
            return ("It's a tie!");
        }
    }
} 