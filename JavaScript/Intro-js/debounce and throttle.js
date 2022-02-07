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
绑定事件解释：addEventListener 第一个参数是监听的事件，第二个参数是对应事件的回调函数。将 debounce 函数作为回调函数，
这个 debounce 回调函数返回一个防抖之后的函数，因此实现了防抖的功能。

防抖解释：当按下某个键的时候触发 keydown 事件，并执行回调。timer 默认为 null，在 return 的函数中定时器 timer 被赋值，
如果在 delay 延迟之内再次触发了 keydown 事件，那么 timer 就会被重置为null...，当用户输入完成之后（delay 时间已过），
那么就会触发 debounce 中的回调函数，也就是 keydown 最终要执行的事件。

函数节流的目的: 是为了限制函数一段时间内只能执行一次。因此，通过使用定时任务，延时方法执行。
在延时的时间内，方法若被触发，则直接退出方法。从而实现一段时间内只执行一次。
*/


// Throttle 函数节流，限制一个函数在一定时间内只能执行一次
function throttle(fn, delay) {
  let timer = null
  return function() {
    if (timer) {
      return
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    })
  }
}
// test
let div1 = document.getElementById('div')
div1.addEventListener('drag', throttle(function(e) {
  console.log(e.offsetX, e.offsetY)
}, 100))

/*
解释：如果timer存在，那就直接返回，不再往下执行了。这样就实现了一段时间内执行一次的目的。

相同点：
都可以通过使用 setTimeout 实现
目的都是，降低回调函数的执行频率，节省计算资源

不同点：
函数防抖，是在一段连续操作结束之后，处理回调，利用 clearTimout 和 setTimeout 实现。函数节流，是在一段连续操作中，
每一段时间只执行一次，在频率较高的事件中使用来提高性能。
函数防抖关注一段时间内连续触发，只在最后一次执行；而函数节流侧重于在一段时间内只执行一次。
*/