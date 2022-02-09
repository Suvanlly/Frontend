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