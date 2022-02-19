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

// find the minimum number in the array
function findMinNum(arr) {
  let min = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]
    }
  }
  return min
}

var test = findMinNum([1,4,6,7,3])
console.log(test)


// Bubble sorting 冒泡排序
// Bubble sort is an algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order
var arr = [1,2,3,4,5]
// 外层循环代表总共需要排多少趟
for (var i = 0; i <= arr.length -1; i++) {
  // 内层循环表示每一趟的交换次数
  for (var j = 0; i <= arr.length - i - 1; j++) {
    // 内部交换两个变量的值，前一个和后一个元素比较
    if (arr[j] < arr[j + 1]) {
      var temp = arr[j]
      arr[j] = arr[j + 1]
      arr[j + 1] = temp
    }
  }
}
console.log(arr)