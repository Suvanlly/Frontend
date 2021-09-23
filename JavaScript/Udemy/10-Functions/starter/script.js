'use strict';

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199

  // 上面是default的值
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

