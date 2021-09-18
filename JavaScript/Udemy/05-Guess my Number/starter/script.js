'use strict';
// read the text of this element with className 'message'
console.log(document.querySelector('.message').textContent);

let secretNum = Math.ceil(Math.random() * 20);
let highScore = 0;
let score = 20; // state variable, can be used everywhere
const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}

// Events Listener
document.querySelector('.check').addEventListener('click', function () {
  // 在点击check的时候，把guess input里面输入的值转成number并赋值给guess
  const guess = Number(document.querySelector('.guess').value); // console.log(guess);

  // When there is no input
  if (!guess) {
    displayMessage('🥺 No number');

    // When player wins
  } else if (guess === secretNum) {
    displayMessage('🥰 Correct Number!');
    document.querySelector('.number').textContent = secretNum;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // 每次玩家赢了这一局，记录一下最高的分
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== secretNum) {
    if (score > 1) {
      displayMessage(guess > secretNum ? '🥺 Too high' : '🥺 Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🥺 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
})

// Click again to reset the page
document.querySelector('.again').addEventListener('click', function () {
  secretNum = Math.ceil(Math.random() * 20);
  // 如果不重新定义一次，secretNum会和上次一样，除非重新reload页面才能生成一个新的secretNum
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
})