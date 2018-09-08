const mysql = require('mysql');
const moment = require('moment');
const { connection } = require('./index.js');

// Inserts Houses Filler Data***

const houseData = [];

for (let i = 0; i < 100; i++) {
  houseData.push([
    Math.random() * 5, // average_rating
    Math.random() * 250, // ratings
    Math.random() * 170, // cleaning_fee
    Math.random() * 120, // service_fee
    Math.random() * 12, // occupancy
  ]);
}

connection.query('INSERT INTO houses (average_rating, ratings, cleaning_fee, service_fee, occupancy) VALUES ?', [houseData], (error, results) => {
  if (error) {
    console.log('ERROR insert to db failed');
  } else {
    console.log('Insert to db successful!');
    console.log(results);
  }
});

// Inserts Calendar Filler Data***

const calendarData = [];

for (let i = 1; i < 100; i++) { // Iterates through 100 houses
  for (let j = 0; j < 365; j++) { // Iterates through one year
    calendarData.push([
      moment('2018-01-01').add(j, 'day').format('YYYY-MM-DD'), // Booking_date
      i, // House_id
      Math.random(), // Occupany (0 = false, 1 = true)
      Math.random() * 560, // Price
    ]);
  }
}

connection.query('INSERT INTO calendar (booking_date, house_id, availability, price) VALUES ?', [calendarData], (error, results) => {
  if (error) {
    console.log('ERROR calendarData insert to db failed');
  } else {
    console.log('calendarData insert to db successful!');
    console.log(results);
  }
});
