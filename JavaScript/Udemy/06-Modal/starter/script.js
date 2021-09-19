'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
//有三个show-modal 所以不能用querySelector，只能返回第一个值，所以用querySelectorAll
const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal);
const openModal = function() {
  // console.log(modal.classList);
  modal.classList.remove('hidden'); //这里不需要.hidden, 只有querySelector需要给ClassName加点
  overlay.classList.remove('hidden');
};
const closeModal = function() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// 给每个btnsOpenModal里面的button都加上click eventListener
for (let i = 0; i < btnsOpenModal.length; i++) {
  // 这里的openModal不能加()call这个function，否则页面刷新会直接执行此function，而不是click以后才执行
  btnsOpenModal[i].addEventListener('click', openModal);
};

// 在点击modal上面的close button和 外面的阴影时，都加上closeModal的function
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// 当modal显示的时候，加一个keydown event listener，按ESC可以退出  
// keydown 只能给全局加event Listener，不能用querySelector给某元素加，当触发Keydown,把e作为argument传给function
document.addEventListener('keydown', function(e) {
  // console.log(e)
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    // 当按键按了Esc并且modal不包含hidden此ClassName, 也就是modal显示的时候，执行closeModal的function
    closeModal();
  }
})