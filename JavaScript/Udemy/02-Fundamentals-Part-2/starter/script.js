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


// Function Declarations VS Expressions
// Function Declaration
function calcAge1(birthYear) {
  return 2040 - birthYear;
}
const age1 = calcAge1(1990);
console.log(age1);

// Function Expression
const calcAge2 = function (birthYear) {
  return 2040 - birthYear;
}
const age2 = calcAge2(1990);
console.log(age2);


// Arrow function
const calcAge3 = birthYear2 => 2040 - birthYear2;
const age3 = calcAge3(2000);
console.log(age3); 

const yearsUntilRetirement = (birthYear3, firstName) => {
  const age = 2040 - birthYear3;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(2010, 'Jonas'));


// Function calling other Function
function fruitPieces(fruit) {
  return fruit * 4;
}
function fruitProcessor2(banana, pineapple) {
  const bananaPieces = fruitPieces(banana);
  const pineapplePieces = fruitPieces(pineapple);

  const juice = `Juice with ${bananaPieces} piece of banana 
  and ${pineapplePieces} piece of pineapple`;
  return juice;
}
console.log(fruitProcessor2(2, 3));


// Arrays
const friends = ['Michael', 'Steven', 'Peter'];
const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends.length); //The length of this array
console.log(friends[friends.length - 1]); //The last item in array

friends[2] = 'Jay'; //mutate the last item in friends
console.log(friends);

const myName = 'Jonas';
const mixArray = [myName, 'Hello', 20 - 3, friends];
console.log(mixArray);