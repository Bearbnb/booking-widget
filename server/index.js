const express = require('express');
const bodyParser = require('body-parser');
const controller = require('../database/index.js');

const app = express();

app.use(express.static('client/dist'));
app.use(bodyParser.json());

app.get('/houses/:id/calendar', (req, res) => {
  controller.findAvailableDates(req.params.id, (error, results) => {
    if (error) {
        console.log(`ERROR findAvailableDates call failed`);
    } else {
      console.log(`findAvailableDates call success!`);
      res.status(200);
      res.send(results);
    }
  });
});


app.get('/houses/:id', (req, res) => {
  controller.findHouseData(req.params.id, (error, results) => {
    if (error) {
      console.log(`ERROR findHouseData call failed`);
    } else {
      console.log(`findHouseData call success!`);
      res.status(200);
      res.send(results);
    }
  });
});


app.post('/rooms/houses/:id/check_in/date/check_out/date/guests/#', (req, res) => {
  controller.insertBookingData(req.body, (error, results) => {
    if (error) {
      console.log(`ERROR insertBookingData call failed`);
    } else {
      console.log(`insertBookingData call success!`);
      res.status(201);
      res.send('Booking Posted!');
    }
  });
});

app.listen(4000, () => console.log('Listening on port 4000...'));
