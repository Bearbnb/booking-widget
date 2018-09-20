const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const controller = require('../database/index.js');

const app = express();

app.use('/:id', express.static('client/dist'));
app.use(cors());
app.use(bodyParser.json());

app.get('/bookings/:id/calendar', (req, res) => {
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


app.get('/bookings/:id', (req, res) => {
  controller.findHouseData(req.params.id, (error, results) => {
    if (error) {
      console.error(`ERROR findHouseData call failed`);
      res.status(404);
    } else {
      console.log(`findHouseData call success!`);
      res.status(200);
      res.send(results);
    }
  });
});

app.get('/bookings/:id/check_in/:date', (req, res) => {
  controller.findHousePrice({ booking_date: `${req.params.date}`, house_id: `${req.params.id}` }, (error, results) => {
    if (error) {
      console.error(`ERROR findHousePrice call failed`)
      res.status(404);
    } else {
      console.log(`findHousePrice call success!`)
      res.status(200);
      res.send(results);
    }
  })
})

app.post('/houses/:id/check_in/:date/check_out/:date', (req, res) => {
  controller.insertBookingData(req.body, (error, results) => {
    if (error) {
      console.log(`ERROR insertBookingData call failed`);
      res.status(400);
    } else {
      console.log(`insertBookingData call success!`);
      res.status(201);
      res.send('Booking Posted!');
    }
  });
});

app.listen(3003, () => console.log('Listening on port 3003...'));
