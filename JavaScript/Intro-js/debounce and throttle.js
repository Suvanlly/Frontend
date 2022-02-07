// debounce 函数防抖，指触发事件后，在n秒后只能执行一次，如果在n秒内又触发事件，则会重新计算函数执行时间
// 简单的说，当一个动作连续触发，只执行最后一次。
function debounce(fn, delay = 500) {
  // timer 是在闭包中的
  let timer = null;
  return function() {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    }, delay)
  }
}

// test debounce 返回一个函数
input1 = document.getElementById('input1')
input1.addEventListener('keyup', debounce(function() {
  console.log(input.value)
}, 600))

/*

*/


// Throttle 函数节流，限制一个函数在一定时间内只能执行一次