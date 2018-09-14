import React from 'react';
import $ from 'jquery';
import dateFns from 'date-fns';
import Calendar from './Calendar.jsx';
import Guests from './Guests.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkIn: dateFns.format(new Date(), 'YYYY-MM-D'),
      checkOut: null,
      adults: 1,
      children: 0,
      infants: 0,
      totalGuests: 1,
      rates: 0,
      averageRating: 0,
      ratings: 0,
      calendarClicked: false,
      checkInSelected: false,
      guestButtonClicked: false
    }
    this.checkInClick = this.checkInClick.bind(this);
    this.checkInDateClick = this.checkInDateClick.bind(this);
    this.guestButtonClick = this.guestButtonClick.bind(this);
    this.adultAddClick = this.adultAddClick.bind(this);
    this.adultSubClick = this.adultSubClick.bind(this);
    this.childrenAddClick = this.childrenAddClick.bind(this);
    this.childrenSubClick = this.childrenSubClick.bind(this);
    this.infantAddClick = this.infantAddClick.bind(this);
    this.infantSubClick = this.infantSubClick.bind(this);
  }

  componentDidMount() {
    this.getHouseData();
  }

  getCalendarData() {
    const { checkIn } = this.state;
    $.ajax({
      method: 'GET',
      url: `/houses/1/check_in/${checkIn}`,
      success: (results) => {
        this.setState({
          rates: results[0].price,
        });
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  getHouseData() {
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
      },
    });
  }

  checkInClick() {
    this.setState({
      calendarClicked: true,
    });
  }

  guestButtonClick() {
    const { guestButtonClicked } = this.state;
    this.setState({
      guestButtonClicked: !guestButtonClicked,
    });
  }

  checkInDateClick(date) {
    this.setState({
      checkIn: dateFns.format(date, 'YYYY-MM-D'),
    }, (error) => {
      if (error) {
        console.error(`ERROR checkInDateClick failed`, error)
      } else {'ERROR checkInDateClick failed'
        this.getCalendarData();
      }
    });
  }

  adultAddClick() {
    const { adults } = this.state;
    this.setState({
      adults: adults + 1,
    });
  }

  adultSubClick() {
    const { adults } = this.state;
    this.setState({
      adults: adults - 1,
    });
  }

  childrenAddClick() {
    const { children } = this.state;
    this.setState({
      children: children + 1,
    });
  }

  childrenSubClick() {
    const { children } = this.state;
    this.setState({
      children: children - 1,
    });
  }

  infantAddClick() {
    const { infants } = this.state;
    this.setState({
      infants: infants + 1,
    });
  }

  infantSubClick() {
    const { infants } = this.state;
    this.setState({
      infants: infants - 1,
    });
  }

  render() {
    const {
      rates, calendarClicked, guestButtonClicked, adults, children, infants,
    } = this.state;

    return (
      <div>
        <i className="fas fa-star"></i>
        <h3 className="rates">
          $
          {rates}
        </h3>
        <div>
          Dates
        </div>
        <input className="check-in" onClick={this.checkInClick} placeholder="Check in" />
        <span>
          ->
        </span>
        <input className="check-out" placeholder="Check out" />
        {calendarClicked &&
          <Calendar checkInDateClick={this.checkInDateClick}/>
        }
        <br />
        {guestButtonClicked ? (
          <Guests guestButtonClick={this.guestButtonClick}
            adults={adults}
            children={children}
            infants={infants}
            adultAddClick={this.adultAddClick}
            adultSubClick={this.adultSubClick}
            childrenAddClick={this.childrenAddClick}
            childrenSubClick={this.childrenSubClick}
            infantAddClick={this.infantAddClick}
            infantSubClick={this.infantSubClick}
          />
        ) : (
          <button onClick={this.guestButtonClick}> Select guests </button>
        )}
        <br />
        <input type="submit" value="Book" />
      </div>
    );
  }
}
export default App;
