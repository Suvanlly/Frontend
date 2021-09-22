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
