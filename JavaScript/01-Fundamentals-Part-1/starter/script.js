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

// Type Conversion / Coercion
// Type conversion is when we manually convert from one to another
const inputYear = '1991';
const newInputYear = Number(inputYear);

console.log(inputYear, newInputYear);
console.log(inputYear + 18, newInputYear + 18)

console.log(Number('Jonas')); //return NaN, means not a valid number
console.log(typeof NaN); //number
console.log(String(23)); //convert from number to string

// Type coercion is when JS automatically converts types behind the scenes
console.log('I am' + 23 + 'years old');
console.log('23' + 10) //'2310', JS use '+' will convert number to str
console.log('23' - 10) // 13, JS  use '-' will convert str to num
console.log('24' / '2') // 12, '/' will convert str to num
console.log('23' > '2') // true, '>' will convert str to num

let n = '1' + 1; //'11' string
n = n - 1; // '11' - 1 convert str to num
console.log(n) //10

// Truthy and Falsy values
// 5 falsy values: 0, '', undefined, null, NaN (They will return false if converted to a boolean)
console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean('Jonas')); //true
console.log(Boolean({})); //true
console.log(Boolean('')); //false

const money = 100; // true
if (money) {
  console.log("money is converted to true");
} else {
  console.log("money is converted to false");
}

let height; // false, because height is not assigned a value
if (height) {
  console.log('height is defined');
} else {
  console.log('height is not defined');
}

// Equality Operators == VS. ===
// '===' is strict equal, it does not perform type coercion (true when both value and type are equal)
console.log(10 === 10) // true
console.log('10' === 10) //false
// '==' is loose equality operator, it will perform type coercion automatically, but don't use it, it will bring a lot of bugs
console.log('10' == 10) //true
// '!==' strict not equal '!=' loose version
console.log('10' != 10) //false
console.log('10' !== 10) //true 


// Logical Operators (And, Or)
const hasLicense = true;
const hasGoodVision = true;

console.log(hasLicense && hasGoodVision); //true
console.log(hasLicense || hasGoodVision); // true
console.log(!hasLicense); //false

if (hasLicense && hasGoodVision) {
  console.log('You can drive');
} else {
  console.log('Do not drive!');
}

const isTired = true;
if (hasLicense && hasGoodVision && !isTired) {
  console.log('You can drive!');
} else {
  console.log('Someone else should drive');
}