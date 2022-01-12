/* Var
Scope: Global scoped or function scoped.
It means variables defined outside the function can be accessed globally, 
and variables defined inside a particular function can be accessed within the function.
*/

// Example 1: Variable ‘a’ is declared globally.
var a = 10;
function f() {
  console.log(a);
}
f();
console.log(a);
// 10 10

// ------------------------------------------------------------------------------------------------------

// Example 2: Variable 'a' is declared inside the function.
function f() {
  // It can be accessible anywhere within this function
  var a = 10;
  console.log(a);
}
f();
// 'a' cannot be accessible outside of function
console.log(a);
// 10
// ReferenceError: a is not defined

// ----------------------------------------------------------------------------------------------------

// Example 3: User can re-declare variable and user can update var variable.
var a = 10;

var a = 8; // user can re-declare variable

a = 7; // user can update var variable
console.log(a); // 7

// ----------------------------------------------------------------------------------------------------

// Example 4: var will be initialized with undefined if user use it before declaration
console.log(a); // undefined

var a = 10;

// ----------------------------------------------------------------------------------------------------

/* Let
Scope: Block scoped.
It can't be accessible outside the particular block.
*/

// Example 1: accessing the let variable outside the function block
let a = 10;
function f() {
  if (true) {
    let b = 9;
    console.log(b);
  }
  console.log(b);
}
f();

console.log(a);

// ----------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------
