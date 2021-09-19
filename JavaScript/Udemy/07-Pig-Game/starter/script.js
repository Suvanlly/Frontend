'use strict';

// Selecting Elements
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const diceImg = document.querySelector('.dice');

// Starting conditions
score0.textContent = 0;
score1.textContent = 0;
diceImg.classList.add('hidden');