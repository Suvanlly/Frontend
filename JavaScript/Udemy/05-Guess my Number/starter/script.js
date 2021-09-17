'use strict';
// read the text of this element with className 'message'
console.log(document.querySelector('.message').textContent);

const secretNum = Math.ceil(Math.random() * 20);
let score = 20; // state variable

document.querySelector('.number').textContent = secretNum;
// Events Listener
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '🥺 No number';

    // When player wins
  } else if (guess === secretNum) {
    document.querySelector('.message').textContent = '🥰 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // When guess is too high
  } else if (guess > secretNum) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🥺 Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🥺 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    // When guess is too low
  } else if (guess < secretNum) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🥺 Too low';
      score--;
      document.querySelector('.score').textContent = score; 
    } else {
      document.querySelector('.message').textContent = '🥺 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

  }
})