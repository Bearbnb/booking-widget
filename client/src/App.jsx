import React from 'react'
import Calendar from './Calendar.jsx'
import $ from "jquery";
import dateFns from 'date-fns';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check_in: dateFns.format(new Date(), "YYYY-MM-D"),
      check_out: '',
      adults: '',
      children: '',
      infants: '',
      totalGuests: '',
      rates: '',
      averageRating: '',
      ratings: '',
      calendarClicked: false,
      checkInSelected: false,
    }
    this.checkInClick = this.checkInClick.bind(this)
    this.checkInDateClick = this.checkInDateClick.bind(this)
  }

  getHouseData () {
    $.ajax({
      method: 'GET',
      url: '/houses/1',
      success: (results) => {
        console.log('GET request called!');
        console.log(results);
        this.setState({
          averageRating: results[0].average_rating,
          ratings: results[0].ratings
        });
      },
      error: (error) => {
        console.log(error);
      }
    })
    // $.ajax({ //Get calendar info
    //   method: 'GET',
    //   url: '/houses/1/calendar',
    //   success: (results) => {
    //     console.log('GET getCalendarData request called!');
    //     console.log(results);
    //   },
    //   error: (error) => {
    //     console.log(error);
    //   }
    // })
  }

  getCalendarData () {
    $.ajax({
      method: 'GET',
      url: `/houses/1/check_in/${this.state.check_in}`,
      success: (results) => {
        console.log('GET getCalendarData request called!');
        this.setState({
          rates: results[0].price
        })
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  componentDidMount () {
    this.getHouseData();
  }

  checkInClick () {
    this.setState({
      calendarClicked: true
    })
  }

  checkInDateClick (date) {

    let checkInDateClickP = new Promise((resolve, reject) => {
      resolve(date)
    })
      .then((date) => {
        console.log(date);
        this.setState({
          check_in: dateFns.format(date, "YYYY-MM-D")
        })
      })
      .then(() => {
        console.log('invoked!');
        this.getCalendarData();
      })
  }

  render() {

    if (this.state.calendarClicked === false) {
      return (
        <div>
          <h3>
            $-
          </h3>
          <div>
            Dates
          </div>
          <input className="check_in" onClick={this.checkInClick} placeholder="Check in" />
          <span>
            ->
          </span>
          <input className="check_out" placeholder="Check out"/>
          <br />
          <input className="guests" placeholder="1 guest"/>
          <br />
          <input type="submit" value="Book"/>
        </div>
      )
    }

    if (this.state.calendarClicked === true) {
      return (
        <div>
          <h3 className="rates">
            ${this.state.rates}
          </h3>
          <div>
            Dates
          </div>
          <input className="check_in" onClick={this.checkInClick} placeholder="Check in" />
          <span>
            ->
          </span>
          <input className="check_out" placeholder="Check out" />
          <Calendar checkInDateClick={this.checkInDateClick}/>
          <input className="guests" placeholder="1 guest"/>
          <input type="submit" value="Book"/>
        </div>
      )
    }
  }
}

export default App;
