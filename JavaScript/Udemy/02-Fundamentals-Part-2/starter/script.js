'use strict'; //activate strict mode in JS
 
// Functions
function logger() {
  console.log('My name is Jonas');
}
// calling / invoking function
logger();

function juiceProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples
  and ${oranges} oranges.`;
  return juice;
}
console.log(juiceProcessor(4, 0));

const appleJuice = juiceProcessor(1, 5);
console.log(appleJuice);