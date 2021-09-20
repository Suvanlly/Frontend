'use strict';

// Selecting Elements
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
let score = 0;

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
    currentScore0.textContent = score;
    //  If is 1, score is 0 and switch to next player
  } else {
    score = 0;
    currentScore0.textContent = score;
  }
})
