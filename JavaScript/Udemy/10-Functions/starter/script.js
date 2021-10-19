'use strict';

// -------------------- Default parameters ----------------------
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199

  // 上面是default parameters的值
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

// Call了几次function，16行就会console.Log几次
createBooking('LH123');
// {flightNum: "LH123", numPassengers: 1, price: 199}
createBooking('LH123', 2, 800);
// {flightNum: "LH123", numPassengers: 2, price: 800}，会把default的parameters替换掉



// -------------------- Passing arguments: Value vs. Reference ----------------------
const flight = 'LH234';

const jonas = {
  name: 'Jonas',
  passport: 123456,
};

const checkIn = function (flightNumber, passenger) {
  flightNumber = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 123456) {
    alert('Checked in');
  } else {
    alert('Wrong passport');
  }
};

checkIn(flight, jonas);
console.log(flight);
// LH234
// flight和 flightNumber是 primitive value 指向不同的address.
console.log(jonas);
// {name: "Mr. Jonas", passport: 123456}
// jonas是一个object，function里面的name被改动，指向同一个address,所以jonas本身也变了


// --------------- Higher order functions: functions accepting callback function ------------------

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
  // 把输入的string里所有的空格都替换成无空格，也就是把空格都缩进，并且转成小写字母
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  // 把输入的str用empty str分开，然后将第一个单词和剩下的单词分离成一个新array: [Javascript, is, the, best, !]
  return [first.toUpperCase(), ...others].join(' ');
  // 第一个单词每个字母都变成大写，并且用join将后面的单词用空格连在一起
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', oneWord);
// Original string: JavaScript is the best!
// Transformed string: javascriptisthebest!
// Transformed by: oneWord
transformer('JavaScript is the best!', upperFirstWord);
// Original string: JavaScript is the best!
// Transformed string: JAVASCRIPT is the best!
// Transformed by: upperFirstWord


// JS uses callbacks all the time
const high5 = function () {
  console.log('Hi');
};
document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);


// ----------------------------- Functions Returning Functions ------------------------------

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
    // 'Hey'是greeting的实参，'Jonas'是name的实参
  };
};

const greeterHey = greet('Hey');
// greet('Hey')直接返回101行另一个function并赋值给greeterHey这个变量
greeterHey('Jonas');
// Hey Jonas
greeterHey('Steven');
// Hey Steven

greet('Hello')('Jonas'); // 二合一
// Hello Jonas

const greetArrow = greeting => name => console.log(`${greeting} ${name}`);
greetArrow('Hi')('Jonas');

// ---------------------------- The Call and Apply Methods ----------------------------
const qantas = {
  airline: 'qantas',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
  },
};

qantas.book(239, 'Jonas');
// Jonas booked a seat on qantas flight LH239
qantas.book(635, 'Sophie');
// Sophie booked a seat on qantas flight LH635
console.log(qantas);


const jetstar = {
  name: 'Jetstar',
  iataCode: 'EW',
  bookings: [],
};

const book = qantas.book;

// book(23, 'Sarah Williams'); 这样写不行，因为 this的指向是undefined


// Call Method
book.call(jetstar, 23, 'Sarah Williams'); // set 'this' keyword point to jetstar
console.log(jetstar);

book.call(qantas, 239, 'Mary Cooper');
console.log(qantas);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);


// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);
// Apply 用的不多，call method更常用一些
book.call(swiss, ...flightData);


// Bind Method
const bookQan = book.bind(qantas);
const bookJet = book.bind(jetstar);
const bookSwi = book.bind(swiss);

bookQan(23, 'Steven Williams');

const bookQan23 = book.bind(qantas, 23);
bookQan23('William');
bookQan23('Martin');

// With Event Listeners
qantas.planes = 300;
qantas.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

// 如果不加 bind(qantas),this的指向会是eventListener attach的东西，也就是‘Buy new plane’这个button
document.querySelector('.buy').addEventListener('click', qantas.buyPlane.bind(qantas));


// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

 // null指的this，这里this没有所以是null，0.23指的是rate，后面还可以写第三个值 value
const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100)); //相当于addTax.bind(null, 0.23, 100)
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));


// ---------------------------- Coding Challenge ----------------------------
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
};