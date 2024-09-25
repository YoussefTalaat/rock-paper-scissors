// DOM Elements
const buttonRock = document.querySelector('#rock');
const buttonPaper = document.querySelector('#paper');
const buttonScissors = document.querySelector('#scissors');
const scoreDiv = document.querySelector('#score');
const lastRoundResultDiv = document.querySelector('#lastRoundResult');
const resetButton = document.querySelector('#reset');

let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function getComputerChoice() {
    let random = Math.random();
    if (random < 1/3) {
        return "rock";
    } else if (random < 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    if ((humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "scissors" && computerChoice == "paper") ||
        (humanChoice == "paper" && computerChoice == "rock")) {
        humanScore++;
        return `You Win! ${humanChoice} beats ${computerChoice}`;
    } else if (humanChoice == computerChoice) {
        return "It's a tie";
    } else {
        computerScore++;
        return `You Lose! ${computerChoice} beats ${humanChoice}`;
    }
}

function updateScore() {
    scoreDiv.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
}

function updateLastRoundResult(result) {
    lastRoundResultDiv.textContent = result;
}

function checkWinner() {
    if (humanScore >= 3) {
        return "You Won the Game!";
    } else if (computerScore >= 3) {
        return "You Lost the Game!";
    }
    return null;
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
    updateScore();
    updateLastRoundResult("Game reset. Choose rock, paper, or scissors to start!");
    enableButtons();
}

function disableButtons() {
    buttonRock.disabled = true;
    buttonPaper.disabled = true;
    buttonScissors.disabled = true;
}

function enableButtons() {
    buttonRock.disabled = false;
    buttonPaper.disabled = false;
    buttonScissors.disabled = false;
}

function playGame(humanChoice) {
    const computerSelection = getComputerChoice();
    const roundResult = playRound(humanChoice, computerSelection);
    updateLastRoundResult(roundResult);
    updateScore();
    roundsPlayed++;
    
    const gameResult = checkWinner();
    if (gameResult) {
        updateLastRoundResult(gameResult + " " + roundResult);
        disableButtons();
    }
}

// Event Listeners
buttonRock.addEventListener("click", () => playGame("rock"));
buttonPaper.addEventListener("click", () => playGame("paper"));
buttonScissors.addEventListener("click", () => playGame("scissors"));
resetButton.addEventListener("click", resetGame);

// Initial game setup
resetGame();