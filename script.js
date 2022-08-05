let choice = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  return randomChoice = choice[Math.floor(Math.random() * choice.length)];
}
console.log(getComputerChoice());