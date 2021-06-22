// calculate the sum of 1 to 100
var sum = 0;
for (var i = 1; i <= 100; i++) {
  sum = sum + i;
}
console.log(sum);

//calculate the sum of even and odd number from 1-100 respectively.
var even = 0;
var odd = 0;
for (var i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    even = even + i;
  } else {
    odd = odd + i;
  }
}
console.log("The sum of even number from 1-100 is " + even);
console.log("The sum of odd number from 1-100 is " + odd);
