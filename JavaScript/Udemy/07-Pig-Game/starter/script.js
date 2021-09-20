'use strict';

// Selecting Elements
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const finalScore0 = document.getElementById('score--0');
const finalScore1 = document.getElementById('score--1');
const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');
const diceImg = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let finalScore, score, activePlayer, playing;
// Starting conditions
const init = function () {
  finalScore = [0, 0];
  score = 0;
  activePlayer = 0;
  playing = true;

  finalScore0.textContent = 0;
  finalScore1.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;

  diceImg.classList.add('hidden');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
};
// call init function to reset to starting condition
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  score = 0; //这里必须reset score，否则player2点击roll dice的时候 32行 currentScore会变成 player1的总分加上player2的
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating random dice number
    const diceNum = Math.ceil(Math.random() * 6);

    // 2. Display dice
    diceImg.classList.remove('hidden');
    diceImg.src = `dice-${diceNum}.png`;

    // 3. Check for dice number: if not 1, add to currentScore
    if (diceNum !== 1) {
      score = score + diceNum;
      document.getElementById(`current--${activePlayer}`).textContent = score;
    } else {
      //  If is 1, score is 0 and switch to next player
      switchPlayer();
    }
  }
});

// Hold Button Functionality
btnHold.addEventListener('click', function () {
  // only execute if playing is true, means when game is not end
  if (playing) {
    finalScore[activePlayer] += score;
    document.getElementById(`score--${activePlayer}`).textContent = finalScore[activePlayer];

    // if finalScore >= 100, Win! Game End
    if (finalScore[activePlayer] >= 10) {
      // setting playing status to false to end the game
      playing = false;
      diceImg.classList.add('hidden');
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
      // 这里之所以remove player--active是为了防止css里，player--active在player--winner的下面定义颜色，即使加了winner的class，如果不remove active还是会被active覆盖，
    } else {
      switchPlayer();
    }
  }
});

// Reset the game
btnNew.addEventListener('click', init)
// JavaScript will call init function as soon as you click the new game button