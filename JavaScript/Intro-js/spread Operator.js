// ES6 provides a new operator called spread operator that consists of three dots (...).
// The spread operator allows you to spread out elements of an iterable object such as an array,a  map, or a set.
// For example:
const odd = [1, 3, 5];
const combined = [2, 4, 6, ...odd];
console.log(combined);
// Output: [2,4,6,1,3,5]

// Note that ES6 also has the three dots ( ...) which is a rest parameter
// that collects all remaining arguments of a function into an array.
function f(a, b, ...args) {
  console.log(args);
}
f(1, 2, 3, 4, 5);
// output: [3,4,5]
// The rest parameters must be the last arguments of a function.

// However, the spread operator can be anywhere
const odd = [1, 3, 5];
const combined = [2, ...odd, 4, 6];
console.log(combined);
// Output:[2,1,3,5,4,6]

// Concatenating array
let numbers = [1, 2];
let moreNumbers = [3, 4];
let allNumbers = [...numbers, ...moreNumbers];
console.log(allNumbers); // [1, 2, 3, 4]

// Copying an array
let scores = [80, 70, 90];
let copiedScores = [...scores];
console.log(copiedScores); // [80, 70, 90]
