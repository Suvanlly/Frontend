var o1 = {
  text:'o1',
  fn: function(){
    return this.text;
  },
};

var o2 = {
  text: 'o2',
  fn: function() {
    return o1.fn();
  }
};

var o3 = {
  text: 'o3',
  fn: function() {
    var fn = o1.fn;
    return fn();
  }
};

console.log(o1.fn()); // o1
console.log(o2.fn()); // o1
console.log(o3.fn()); // undefined