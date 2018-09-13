import React from 'react'
import Calendar from './Calendar.jsx'
import $ from "jquery";
import dateFns from 'date-fns';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check_in: dateFns.format(new Date(), "YYYY-MM-D"),
      check_out: null,
      adults: 1,
      children: 0,
      infants: 0,
      totalGuests: 1,
      rates: 0,
      averageRating: 0,
      ratings: 0,
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
        this.setState({
          averageRating: results[0].average_rating,
          ratings: results[0].ratings
        });
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  getCalendarData () {
    $.ajax({
      method: 'GET',
      url: `/houses/1/check_in/${this.state.check_in}`,
      success: (results) => {
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
    this.setState({
      check_in: dateFns.format(date, "YYYY-MM-D")
    }, (error, results) => {
      if (error) {
        console.log(`ERROR checkInDateClick failed`, error)
      } else {
        this.getCalendarData();
      }
    })
  }

  render() {

  let { calendarClicked } = this.state;

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
        {calendarClicked &&
          <Calendar checkInDateClick={this.checkInDateClick}/>
        }
        <br />
        <input className="guests" placeholder="1 guest"/>
        <br />
        <input type="submit" value="Book"/>
      </div>
    )
  }
}
export default App;
