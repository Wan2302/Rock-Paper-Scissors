const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
let computerWin, playerWin;

function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  return choice[Math.floor(Math.random() * choice.length)];
}

function getPlayerChoice() {
  const choice = prompt("Rock, paper, scissors?");
  return choice.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
    playerWin += 1;
    return "You win";
  } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
             (playerSelection === "paper" && computerSelection === "rock") ||
             (playerSelection === "scissors" && computerSelection === "paper")) {
    computerWin += 1;
    return "You lose";
  } else {
    return "It's a tie";
  }
}

playerScore = 0;
computerScore = 0;

function game() {
  for (let rounds = 0; rounds < 5; rounds++) {
    console.log(playRound(prompt("Rock, paper or scissors?").toLowerCase(), getComputerChoice())); 
    if (playerWin += 1) {
      playerScore++;
    } else if (computerWin += 1) {
      computerScore++;
    }
}
 if (playerScore > computerScore) {
  console.log("You won the game!");
 } else {
  console.log("You lose the game");
 }
}

game();
