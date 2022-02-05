var number1 = [];
number1 = [1, 2, 3];
let size1 = 3;
let j = 0;
total1 = 0;
while (j < size1) {
  var k = j;
  while (k < size1) {
    total1 = total1 + number1[k];
    k = k + 1;
  }
  j = j + 1;
}
console.log(total1);


var size = 0
var number = [1,3,5]
size = size + 3;
var x = 0
let total = 0
while (x < size) {
    total = total + number[x]
    x = x + 2
}
console.log(total)