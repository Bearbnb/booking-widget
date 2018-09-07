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


// Inserts Houses Data

// var data = [];
//
// for (let i = 0; i < 100; i++) {
//   data.push([
//     Math.random() * 5, // average_rating
//     Math.random() * 250, // ratings
//     Math.random() * 170, // cleaning_fee
//     Math.random() * 120, // service_fee
//     Math.random() * 12, // occupancy
//   ]);
// }
//
// connection.query('INSERT INTO houses (average_rating, ratings, cleaning_fee, service_fee, occupancy) VALUES ?', [data], (error, results) => {
//   if (error) {
//     console.log('ERROR insert to db failed');
//   } else {
//     console.log('Insert to db successful!');
//     console.log(results);
//   }
// });


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


module.exports.findAvailableDates = findAvailableDates;
module.exports.findHouseData = findHouseData;

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
