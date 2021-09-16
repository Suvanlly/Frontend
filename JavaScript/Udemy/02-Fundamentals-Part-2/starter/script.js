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


// Array Operations
const newFriends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = newFriends.push('Jay');
console.log(newFriends);
console.log(newLength); //4, push() return the new length of array

newFriends.unshift('John'); //add in the beginning of array
console.log(newFriends);

// Remove elements
const popped = newFriends.pop();
console.log(newFriends);
console.log(popped);

const shifted = newFriends.shift(); //remove the first item
console.log(newFriends);
console.log(shifted);

// find an item in array
console.log(newFriends.indexOf('Steven')); // 1
console.log(newFriends.indexOf('Bob')); // -1

console.log(newFriends.includes('Steven')); // true
console.log(newFriends.includes('Bob')); // flase


// Objects
const objects = {
  firstName: 'Jonas',
  lastName: 'Sun',
  age: 2030 - 1990,
  job: 'teacher',
  myFriend: ['Bob', 'Jack', 'Lynn']
};
console.log(objects);

console.log(objects.job); //teacher
console.log(objects['job']); //teacher

const myJob = 'job';
console.log(objects.myJob); 
// undefined, because there is no property in objects with name of 'myJob'
console.log(objects[myJob]);
// teacher, 方括号里面可以写变量名字，不一定要写objects里面有的名字

objects.location = 'Sydney'; // add property 'location' to objects
objects['weChat'] = 'Hello'; // add property 'weChat' to objects
console.log(objects);

// Object Methods
const newObjects = {
  firstName: 'Sophie',
  lastName: 'Sun',
  birthYear: 1996,
  calcAge4: function () {
    console.log(this);
    // this refer to the one who calling the calcAge method.
    return 2021 - this.birthYear;
  },
  adultYears: function () {
    this.adultYrs = this.calcAge4() - 18; // 25 - 18 = 7
    // add new property named adultYrs.
    return this.adultYrs;
  }
};
console.log(newObjects.calcAge4()); // 25 (2021 - 1996)
// newObjects calling the calcAge() method, so this refer to newObjects.
console.log(newObjects.adultYears());


// the For Loop
for (let rep = 1; rep <= 10; rep++) {
  console.log(`repetition ${rep} times`)
};

// looping an array
const sophie = [
  'Sophie',
  'Sun',
  25,
  true,
  'Developer'
];
const types = [];

for (let i = 0; i < sophie.length; i++) {
  console.log(sophie[i] , typeof sophie[i]);

  types[i] = typeof sophie[i];
}
console.log(types);

// continue and break
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < sophie.length; i++) {
  if (typeof sophie[i] !== 'string') continue;
// continue means it will exit this line of iteration, won't execute next line
  console.log(sophie[i], typeof sophie[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < sophie.length; i++) {
  if (typeof sophie[i] === 'number') break;
// break will exit the whole loop when found type of number. Next item will not be iterated.
  console.log(sophie[i], typeof sophie[i]);
}

// looping an array backwards
const sophie1 = [
  'Sophie',
  'Sun',
  25,
  true,
  'Developer'
];

for (let i = sophie1.length - 1; i >= 0; i--) {
  console.log(i, sophie1[i]);
}

  // looping a loop inside a loop
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`------Starting from exercise ${exercise}`);

  for (let rep = 1; rep < 5; rep++) {
    console.log(`${exercise}-${rep}`)
  };
}


// The while loop
let i = 1;
while (i <= 5) {
  console.log(`WHILE LOOP: ${i}`);
  i++;
}

let dice = Math.ceil(Math.random() * 6);
while (dice !== 6) {
  console.log(`dice number is ${dice}`);
  // rolling the dice again
  dice = Math.ceil(Math.random() * 6);
  if (dice === 6) console.log(`Loop is end`);
}

// exercise Average calculation
const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
}
console.log(calcAverage([2, 5, 8]));