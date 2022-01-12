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
