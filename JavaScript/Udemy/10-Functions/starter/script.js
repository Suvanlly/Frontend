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
}

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
// flight和 flightNumber是 primitive value 指向不同的address
console.log(jonas);
// {name: "Mr. Jonas", passport: 123456}
// jonas是一个object，function里面的name被改动，指向同一个address,所以jonas本身也变了