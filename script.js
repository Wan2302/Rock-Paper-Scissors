let playerScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const outcome = document.querySelector('.outcome');
const result = document.querySelector('.result');
const buttons = document.querySelectorAll("input");

function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  return choice[Math.floor(Math.random() * choice.length)];
}

function disableButtons() {
    buttons.forEach(elem => {
      elem.disabled = true
  })}

function playRound(playerSelection, computerSelection) {
  const p = document.createElement('p');
  const score = document.createElement('p');
  outcome.appendChild(p);
  outcome.appendChild(score);
    if (playerSelection === computerSelection) {
    const text = document.createTextNode("It's a tie");
    const scoreText = document.createTextNode(`Player score: ${playerScore} | Computer score: ${computerScore}`)
    p.appendChild(text);
    score.appendChild(scoreText);
  } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
             (playerSelection === "paper" && computerSelection === "rock") ||
             (playerSelection === "scissors" && computerSelection === "paper")) {
    playerScore += 1;
    const text = document.createTextNode("You win");
    const scoreText = document.createTextNode(`Player score: ${playerScore} | Computer score: ${computerScore}`)
    p.appendChild(text);
    score.appendChild(scoreText);
    if (playerScore > 4) {
      const winText = document.createTextNode("You won the match, eh. Reload the page to play again.")
      result.appendChild(winText);
      disableButtons();
    }
  } else {
    computerScore += 1;
    const text = document.createTextNode("You lose");
    const scoreText = document.createTextNode(`Player score: ${playerScore} | Computer score: ${computerScore}`)
    p.appendChild(text);
    score.appendChild(scoreText);
    if (computerScore > 4) {
      const loseText = document.createTextNode("You lose the match, mate. Reload the page to play again.")
      result.appendChild(loseText);
      disableButtons();
    }
  } 
}

rockBtn.addEventListener('click', () => {
  let computerSelection = getComputerChoice();
  let playerSelection = "rock";
  playRound(playerSelection, computerSelection);
});

paperBtn.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const playerSelection = "paper";
  playRound(playerSelection, computerSelection);
});

scissorsBtn.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const playerSelection = "scissors";
  playRound(playerSelection, computerSelection);
});



/* 
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

game(); */