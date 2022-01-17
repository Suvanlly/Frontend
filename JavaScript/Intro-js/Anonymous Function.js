// The following shows an anonymous function that displays a message.
let show = function () {
  console.log("Anonymous function");
};
show();

// Using anonymous functions as arguments
setTimeout(function () {
  console.log("Execute later after 1 second");
}, 1000);

// Immediately invoked function execution
(function () {
  console.log("IIFE");
})();

// Arrow function expression provides a shorthand for declaring anonymous function
let show = function () {
  console.log("Anonymous function");
};

let show = () => console.log("Anonymous function");

// Another arrow function case
let add = function (a, b) {
  return a + b;
};
let add = (a, b) => a + b;
