function unique(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
     // if there is no such element, indexof arr[i] will return -1, usually it will the first occured number's index 
    if (newArr.indexOf(arr[i]) === -1) {
        newArr.push(arr[i]);
    }
  }
  return newArr;
}
var demo = unique(['c', 'a', 'c', 'd', 'd', 's'])
console.log(demo);