const mysql = require('mysql');
const moment = require('moment');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bearbnb',
});

connection.connect((error, results) => {
  if (error) {
    console.log('ERROR DB connection failed');
  } else {
    console.log('DB connection successful!');
  }
});


const findAvailableDates = (houseNum, callback) => {
  connection.query(`SELECT calendar.booking_date FROM calendar
    INNER JOIN houses ON houses.house_id = calendar.house_id
    WHERE houses.house_id = ${houseNum}`, (error, results) => {
    if (error) {
      console.log('ERROR findAvailableDates query failed');
      callback(error, null);
    } else {
      console.log('findAvailableDates query success!');
      callback(null, results);
    }
  });
};

const findHouseData = (houseNum, callback) => {
  connection.query(`SELECT * FROM houses WHERE house_id = ${houseNum}`, (error, results) => {
    if (error) {
      console.log('ERROR findHouseData query failed');
      callback(error, null);
    } else {
      console.log('findHouseData query success!');
      callback(null, results);
    }
  });
};

const findHousePrice = (dateData, callback) => {
  connection.query(`SELECT calendar.price FROM calendar WHERE calendar.booking_date = "${dateData.booking_date}" AND calendar.house_id = ${dateData.house_id}`, (error, results) => {
    if (error) {
      console.log('ERROR findHousePrice query failed');
      callback(error, null);
    } else {
      console.log('findHousePrice query success!');
      callback(null, results);
    }
  });
};

const insertBookingData = (bookingData, callback) => {

  connection.query(`INSERT INTO booking (house_id, check_in, check_out, adults, children, infants, total_occupancy, price, cleaning_fee, service_fee, total_price)
    VALUES (${bookingData.house_id}, "${bookingData.check_in}", "${bookingData.check_out}", ${bookingData.adults}, ${bookingData.children}, ${bookingData.infants}, ${bookingData.total_occupancy}, ${bookingData.price}, ${bookingData.cleaning_fee}, ${bookingData.service_fee}, ${bookingData.total_price})`, (error, results) => {
    if (error) {
      console.log('ERROR insertBookingData query failed', error);
      callback(error, null);
    } else {
      console.log('insertBookingData query success!');
      callback(null, results);
    }
  });
}



module.exports.findAvailableDates = findAvailableDates;
module.exports.findHouseData = findHouseData;

// Inserts Calendar Filler Data***

// const calendarData = [];
//
// for (let i = 1; i < 100; i++) { // Iterates through 100 houses
//   for (let j = 0; j < 365; j++) { // Iterates through one year
//     calendarData.push([
//       moment('2018-01-01').add(j, 'day').format('YYYY-MM-DD'), // Booking_date
//       i, // House_id
//       Math.random(), // Occupany (0 = false, 1 = true)
//       Math.random() * 560, // Price
//     ]);
//   }
// }
//
// connection.query('INSERT INTO calendar (booking_date, house_id, availability, price) VALUES ?', [calendarData], (error, results) => {
//   if (error) {
//     console.log('ERROR calendarData insert to db failed');
//   } else {
//     console.log('calendarData insert to db successful!');
//     console.log(results);
//   }
// });

// Inserts Houses Filler Data***

// const houseData = [];
//
// for (let i = 0; i < 100; i++) {
//   houseData.push([
//     Math.random() * 5, // average_rating
//     Math.random() * 250, // ratings
//     Math.random() * 170, // cleaning_fee
//     Math.random() * 120, // service_fee
//     Math.random() * 12, // occupancy
//   ]);
// }
//
// connection.query('INSERT INTO houses (average_rating, ratings, cleaning_fee, service_fee, occupancy) VALUES ?', [houseData], (error, results) => {
//   if (error) {
//     console.log('ERROR insert to db failed');
//   } else {
//     console.log('Insert to db successful!');
//     console.log(results);
//   }
// });


// Test


// findAvailableDates(1, (error, results) => {
//   if (error) {
//     console.log(`ERROR findAvailableDates call failed`)
//   } else {
//     console.log(`findAvailableDates call success!`)
//   }
// })

// findHouseData(2, (error, results) => {
//   if (error) {
//     console.log(`ERROR findHouseData call failed`)
//   } else {
//     console.log(`findHouseData call success!`)
//   }
// })

// findHousePrice({ booking_date: "2018-12-31", house_id: 99 }, (error, results) => {
//   if (error) {
//     console.log(`ERROR findHousePrice call failed`)
//   } else {
//     console.log(`findHousePrice call success!`)
//   }
// })

// const bookingData = {
//   house_id: 98, check_in: '2018-01-01', check_out: '2018-01-02', adults: 2, children: 2, infants: 0, total_occupancy: 4, price: 40, cleaning_fee: 67, service_fee: 20, total_price: 127,
// };
//
// insertBookingData(bookingData, (error, results) => {
//   if (error) {
//     console.log(`ERROR insertBookingData call failed`)
//   } else {
//     console.log(`insertBookingData call success!`)
//   }
// })
