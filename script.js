'use strict';
let secretNumber = generateSecretNumber();
let score = 20;
let highScore = 0;
// console.log(typeof document.querySelector('.guess').value);
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent;
// document.querySelector('.message').textContent = 'Correct number';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;
// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 60;
function generateSecretNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function setScore(score) {
  document.querySelector('.score').textContent = score;
}

function showSecretNumber(secretNumber, width) {
  document.querySelector('.number').style.width = width;
  document.querySelector('.number').textContent = secretNumber;
}
function updateBody(style) {
  document.querySelector('body').style.backgroundColor = style;
}
setScore(score);
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  // when there is no input.
  if (!guess) {
    displayMessage('No Number!! ');
  }
  // when player wins.
  else if (guess === secretNumber) {
    displayMessage('Correct Number');
    updateBody('#60b347');
    showSecretNumber(secretNumber, '30rem');
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High!!!' : 'Too Low!!!!');
      --score;
      setScore(score);
    } else {
      displayMessage('You lost the game!!');
      document.querySelector('.score').textContent = 0;
    }
  }
  // // whn guess is too high.
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too High!!!';
  //     --score;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game!!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // // when guess is too low.
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too Low!!!';
  //     --score;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'you lost the game!!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // // document.querySelector('.guess').value = 66;
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = generateSecretNumber();
  displayMessage('start guessing!!!');
  setScore(score);
  document.querySelector('.guess').value = '';
  updateBody('black');
  showSecretNumber('?', '15rem');
});
