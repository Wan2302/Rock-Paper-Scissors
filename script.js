const playerSelection = "paper";
const computerSelection = getComputerChoice();

function getComputerChoice() {
  const choice = ["Rock", "Paper", "Scissors"];
  return randomChoice = choice[Math.floor(Math.random() * choice.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
    return "Tie!";
  } else if ((playerSelection == "rock" && computerSelection == "scissors") ||
             (playerSelection == "paper" && computerSelection == "rock") ||
             (playerSelection == "scissors" && computerSelection == "paper")) {
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
}


console.log(playRound(playerSelection, computerSelection));