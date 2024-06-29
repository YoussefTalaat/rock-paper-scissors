function getComputerChoice() {
  let random = Math.random();
  if (random < (1/3)) {
      return "rock";
  } else if (random > (2/3)) {
      return "paper";
  } else if (random > (1/3) && random < (2/3)) {
      return "scissors";
  }

}

function getHumanChoice() {
  let humanChoice = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();
  if (humanChoice == "rock" || humanChoice == "paper" || humanChoice == "scissors") {
      return humanChoice;
  } else {
      console.log("Invalid choice. Please choose rock, paper, or scissors.");
      return getHumanChoice(); // Recursively ask for a valid input
  }
       
}

let humanScore = 0;
let computerScore = 0; 

function playRound(humanChoice, computerChoice) {
  if ((humanChoice == "rock" && computerChoice == "scissors")||
      (humanChoice == "scissors" && computerChoice == "paper")||
      (humanChoice == "paper" && computerChoice == "rock")) {
      humanScore++;
      return `You Win! ${humanChoice} beats ${computerChoice}`;
        
  } else if ((humanChoice == "rock" && computerChoice == "rock")||
             (humanChoice == "scissors" && computerChoice == "scissors")||
             (humanChoice == "paper" && computerChoice == "paper")) {
            	return "It's a tie";
    } else {
        computerScore++;
        return "You Lose!";
    }
}
  


function playGame(){
	for (let i = 0; i < 5; i++){
		const humanSelection = getHumanChoice();
		const computerSelection = getComputerChoice(); 
		console.log(playRound(humanSelection, computerSelection));
        console.log("Your Selection: " + humanSelection);
        console.log("Computer Selection: " + computerSelection);
		console.log("You: " + humanScore);
		console.log("Computer: " + computerScore);
        
	}
	if (humanScore > computerScore){
		console.log("You Won the Game!");
	} else if (humanScore < computerScore) {
		console.log("You Lost the Game!");
	} else {
		console.log("There is no winner!");
	}
}

playGame();