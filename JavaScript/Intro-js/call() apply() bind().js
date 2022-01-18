// Call()
function sayHello() {
  return "Hello" + this.name;
}
var obj = { name: "Sandy" };

sayHello.call(obj);
