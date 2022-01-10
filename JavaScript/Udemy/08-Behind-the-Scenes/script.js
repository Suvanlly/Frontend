'use strict';

// Function scope / Global scope
function calcAge(birthYear) {
  const age = 2020 - birthYear;

  // fucntion scope
  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    // Block scope
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true; // var is function scoped
      const str = `you are a millenial ${firstName}`; // const and let are block scoped
      console.log(str);

      // function scope under block scope
      function add(a, b) {
        return a + b;
      }
      console.log(add(2, 3));

      output = 'NEW OUTPUT'; // output reassigned value
    }

    // console.log(add(2, 3)); 
    // Error: because under strict mode, this function is under block scope and can only be call inside block
    console.log(millenial); // true
    console.log(output); 
  }
  printAge();

  return age;
}

// Global Scope
const firstName = 'Jonas';
calcAge(1990);



// ---------- Hoisting and Temporary dead zone -----------

// Hoisting with Variable
console.log(me); // undefined, var will be hoisted with value of undefined
console.log(job); // error: cannot access before initialization becasue it is in TDZ
console.log(year); // error: const cannot be hoisted, TDZ between line 44 - line 50

var me = 'Jonas';
let job = 'teacher';
const year = '1991';


// Hoisting with functions
console.log(addDecl(2, 3)); // 5, because function can be hoisted with actual function
console.log(addExpr(2, 3)); // error: const within TDZ
console.log(addArrow(2, 3)); // var is hoisted with undefined addArrow function

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
}

var addArrow = (a, b) => a + b;


// ----------------- This key word ------------------
console.log(this); 
// Window object

const calcAge1 = function (birth) {
  console.log(2020 - birth);
  console.log(this); // undefined, because calcAge function doesn't called by anyone
};
calcAge1(1990);

const calcAgeArrow = birth => {
  console.log(2020 - birth);
  console.log(this); // Window object, because arrow function doesn't have it own this keyword, it can only use its parent one's
};
calcAgeArrow(1990);


const jonas = {
  year: 1990,
  calcAge: function () {
    console.log(this); // jonas call了这个function, 所以jonas整体就是this指向的对象
    console.log(2020 - this.year); // 2020 - 1990 = 30
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
}

matilda.calcAge = jonas.calcAge; // now matilda also has calcAge function
matilda.calcAge();


// ---------- Primitive VS. Reference Values -----------
// primitive values
let age = 30;
let oldAge = age;
age = 31;
console.log(age); // 31
console.log(oldAge); // 30

// Reference values example
const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 27;

console.log('Friend:', friend);
// { name: 'Jonas', age: 27 }
console.log('Me:', me);
// { name: 'Jonas', age: 27 }


// Copying objects
const me2 = {
  name: 'Jonas',
  age: 30,
};

const meCopy = Object.assign({}, me2);
meCopy.name = 'Davis';
console.log(me2);
// { name: 'Jonas', age: '30' }
console.log(meCopy);
// { name: 'Davis', age: '30' }