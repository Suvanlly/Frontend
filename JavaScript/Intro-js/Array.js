// Array数组 创建数组两种方式？

// 1.
var arr = new Array(); //注意Array()的A要大写

// 2. 利用数组字面量创建
var arr = [];
var arr1 = [1, 2, 'pink', true]
console.log(arr1[0]) //1
console.log(arr1[4]) //undefined

// 3.遍历数组
var cars = ['BMW', 'MAZDA', 'TOYOTA'];
for (i = 0; i < cars.length; i++) {
  console.log(cars[i])
}