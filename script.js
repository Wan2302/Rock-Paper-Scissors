let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  return choice[Math.floor(Math.random() * choice.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie";
  } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
             (playerSelection === "paper" && computerSelection === "rock") ||
             (playerSelection === "scissors" && computerSelection === "paper")) {
    playerScore += 1;
    return "You win";
  } else {
    computerScore += 1;
    return "You lose";
  }
}

function game() {
  for (let rounds = 0; rounds < 5; rounds++) {
    console.log(playRound(prompt("Rock, paper or scissors?").toLowerCase(), getComputerChoice())); 
}
 if (playerScore > computerScore) {
  console.log("You won the game!");
 } else if(playerScore < computerScore) {
  console.log("You lose the game");
 } else {
  console.log("Nobody wins, nobody loses, eh")
 }
}

game();
