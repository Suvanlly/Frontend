// nameing convention
let jonas_matilda = "JM";
let $function = 27;
let PI = 3.1415;
let myFistJob = "teacher"; 

// variables and value
let year;
console.log(year); // undefined
console.log(typeof year); // undefined
year = 1991; 
// year has already been declared, so don't need to write let again
console.log(year); // number

console.log(typeof null); 
// 这是一个bug,系统会返回object,但是实际上应该是null


// let(ES6), const(ES6) and var(old way)
let age = 30;
age = 31;
// let to declare variables that can change later, they are mutable

const birthYear = 1991;
// const declared variable cannot be changed

var job = 'programmer';
job = 'teacher';

// Basic Operators
// Assignment operators
let x = 10 + 5;
x += 10;
x *= 4; // x = x * 4
x ++;
x --;

// Comparison operators
const ageJonas = 5;
const ageSarah = 10;
// >, <, >=, <=
console.log(ageJonas > ageSarah);


// String and Template Literals
const firstName = "Jonas";
const jonas = "I'm " + firstName;
console.log(jonas)
// Template String
const jonasNew = `I'm ${firstName}`
console.log(jonasNew)
console.log(`just a regular string`)
// Quotes
console.log('String with \n\
multiple \n\
line');
// Template literals
console.log(`String
multiple
lines`);

// If/Else Statement
const age1 = 19;
const isOldEnough = age1 >= 18;

if (isOldEnough) {
  console.log('You can start driving licnese');
}

const age2 = 15;
if (age2 >= 18) {
  console.log('You can start driving licnese');
} else {
  const yearsLeft = 18 - age2;
  console.log(`wait another ${yearsLeft} years`)
}

const birth = 2012;
let century; //You have to define century here
if (birth <= 2000) {
  century = '20 century';
} else {
  century = '21 century';
}
console.log(century)