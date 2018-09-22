const mysql = require('mysql');
require('dotenv').config();

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'bookings',
// });

const connection = mysql.createConnection({
  host: process.env.RDS_HOSTNAME,
  user: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  port: process.env.RDS_PORT,
  database: process.env.RDS_DB_NAME,
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
    WHERE houses.house_id = ${houseNum} AND calendar.availability = 1`, (error, results) => {
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

  connection.query(`INSERT INTO booking (house_id, check_in, check_out, adults, children, infants, price, cleaning_fee, service_fee, taxes)
    VALUES (${bookingData.house_id}, "${bookingData.check_in}", "${bookingData.check_out}", ${bookingData.adults}, ${bookingData.children}, ${bookingData.infants}, ${bookingData.price}, ${bookingData.cleaning_fee}, ${bookingData.service_fee}, ${bookingData.taxes})`, (error, results) => {
    if (error) {
      console.log('ERROR insertBookingData query failed', error);
      callback(error, null);
    } else {
      console.log('insertBookingData query success!');
      callback(null, results);
    }
  });
}


module.exports.connection = connection;
module.exports.findAvailableDates = findAvailableDates;
module.exports.findHouseData = findHouseData;
module.exports.findHousePrice = findHousePrice;
module.exports.insertBookingData = insertBookingData;

// Tests

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

// const bookingData = { house_id: 99, check_in: '2018-01-01', check_out: '2018-01-02', adults: 2, children: 2, infants: 0, price: 40, cleaning_fee: 67, service_fee: 20 }
//
// insertBookingData(bookingData, (error, results) => {
//   if (error) {
//     console.log(`ERROR insertBookingData call failed`)
//   } else {
//     console.log(`insertBookingData call success!`)
//   }
// })
