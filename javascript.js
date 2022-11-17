let choices = ["rock", "paper", "scissors"];    
let player_score = 0;
let computer_score = 0;
let gameOn = true;
const message = document.createElement('div');
const scoreboardP = document.createElement('div');
const scoreboardC = document.createElement('div');
const tryAgain = document.createElement('button');
const result = document.createElement('div')
message.classList.add('message')
result.classList.add('scoreboard')
scoreboardP.classList.add('player')
scoreboardC.classList.add('computer')
tryAgain.classList.add('restart')
document.body.appendChild(message)
document.body.appendChild(result)
result.appendChild(scoreboardC)
result.appendChild(scoreboardP)
document.body.appendChild(tryAgain)
tryAgain.textContent = "Try Again?";
tryAgain.addEventListener('click', reset)
tryAgain.style.display = "none";


const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
    button.addEventListener ('click', () => {
        message.textContent = playRound(button.id, getComputerChoice())});
});

function set() {
    message.textContent = "";
    scoreboardP.textContent = "";
    scoreboardC.textContent = "";
    tryAgain.style.display = "none";
    buttons.forEach((button) => {
        button.style.display = "inline";
    })
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
            scoreboardP.textContent = `Player: ${player_score}` 
            scoreboardC.textContent = `Computer: ${++computer_score}`;
            if ((computer_score)==5) {
                stopGame();
                return("I guess you are a loser...");
            } else {
                return(`Computer won!  ${computerSelection} beats ${playerSelection}.`);
            }
            
        } else if (playerSelection.toLowerCase()==="paper" && computerSelection==="rock" || playerSelection.toLowerCase()==="rock" 
        && computerSelection==="scissors" || playerSelection.toLowerCase()==="scissors" && computerSelection==="paper") {
            scoreboardP.textContent = `Player: ${++player_score}` 
            scoreboardC.textContent = `Computer: ${computer_score}`;           
            if (player_score==5) {
                stopGame();
                return("I am proud of you!");
            } else {
                return(`You won! ${playerSelection} beats ${computerSelection}.`);
            }
        } else {
            scoreboardP.textContent = `Player: ${player_score}` 
            scoreboardC.textContent = `Computer: ${computer_score}`;
            return ("It's a tie!");
        }
    }
}