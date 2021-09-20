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
const btnHold = document.querySelector('btn--hold');

// Starting conditions
finalScore0.textContent = 0;
finalScore1.textContent = 0;
diceImg.classList.add('hidden');
const finalScore = [0, 0];
let score = 0;
let activePlayer = 0;

// Rolling dice functionality
btnRoll.addEventListener('click', function() {
  // 1. Generating random dice number
  const diceNum = Math.ceil(Math.random() * 6);

  // 2. Display dice
  diceImg.classList.remove('hidden');
  diceImg.src = `dice-${diceNum}.png`;

  // 3. Check for dice number: if not 1, add to currentScore
  if (diceNum !== 1) {
    score = score + diceNum;
    document.getElementById(`current--${activePlayer}`).textContent = score
    
  } else {
    //  If is 1, score is 0 and switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0
    score = 0; //这里必须reset score，否则player2点击roll dice的时候 32行 currentScore会变成 player1的总分加上player2的
    activePlayer = activePlayer === 0 ? 1 : 0
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
  }
})
