// get the buttons and the result element
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const resultElement = document.querySelector('#result');
const winsElement = document.querySelector('#wins');

// get the player and computer choice elements
const playerChoiceElement = document.querySelector('#player-choice');
const computerChoiceElement = document.querySelector('#computer-choice');

// create an array of choices
const choices = ['rock', 'paper', 'scissors'];
let wins = 0;
// create a function to play the game
function play(playerChoice) {
  // get the computer's choice
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  // update the player and computer choice elements
  playerChoiceElement.src = `/Svg/${playerChoice}.svg`;
  computerChoiceElement.src = `/Svg/${computerChoice}.svg`;

  // determine the winner
  if (playerChoice === computerChoice) {
    resultElement.textContent = "It's a tie!";
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    resultElement.textContent = "You win!";
    wins++;
    winsElement.innerText = `Win steak: ${wins}`;
  } else {
    resultElement.textContent = "You lose!";
    wins = 0;
    winsElement.innerText = `Win steak: ${wins}`;
  }
}

// add event listeners to
rockButton.addEventListener('click', () => play('rock'));
paperButton.addEventListener('click', () => play('paper'));
scissorsButton.addEventListener('click', () => play('scissors'));
