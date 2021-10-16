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


// --------------- Functions Returning Functions ------------------

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');