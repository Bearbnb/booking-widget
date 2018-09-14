import React from 'react';
import $ from 'jquery';
import dateFns from 'date-fns';
import Calendar from './Calendar.jsx';
import Guests from './Guests.jsx';
import Ratings from './Ratings.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkIn: null,
      checkOut: null,
      adults: 1,
      children: 0,
      infants: 0,
      rates: 0,
      averageRating: 0,
      ratings: 0,
      calendarClicked: false,
      guestButtonClicked: false,
      cleaningFee: 0,
      serviceFee: 0,
    }
    this.checkInClick = this.checkInClick.bind(this);
    this.checkOutClick = this. checkOutClick.bind(this);
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
      url: `/houses/5/check_in/${checkIn}`,
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
      url: '/houses/5',
      success: (results) => {
        this.setState({
          averageRating: results[0].average_rating,
          ratings: results[0].ratings,
          cleaningFee: results[0].cleaning_fee,
          serviceFee: results[0].service_fee,
          rates: results[0].average_rate,
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

  checkOutClick() {
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
    const { checkIn, checkOut, calendarClicked } = this.state;
    if (checkIn === null || checkIn > dateFns.format(date, 'YYYY-MM-D')) {
      this.setState({
        checkIn: dateFns.format(date, 'YYYY-MM-D'),
      }, (error) => {
        if (error) {
          console.error(`ERROR checkInDateClick failed`, error)
        } else {
          this.getCalendarData();
        }
      });
    } else {
      this.setState({
        checkOut: dateFns.format(date, 'YYYY-MM-D'),
        calendarClicked: !calendarClicked,
      }, (error) => {
        if (error) {
          console.error(`ERROR checkInDateClick failed`, error)
        } else {
          this.getCalendarData();
        }
      });
    }

  }

  adultAddClick() {
    const { adults } = this.state;
    this.setState({
      adults: adults + 1,
    });
  }

  adultSubClick() {
    const { adults } = this.state;
    if (adults > 1) {
      this.setState({
        adults: adults - 1,
      });
    }
  }

  childrenAddClick() {
    const { children } = this.state;
    this.setState({
      children: children + 1,
    });
  }

  childrenSubClick() {
    const { children } = this.state;
    if (children > 0) {
      this.setState({
        children: children - 1,
      });
    }
  }

  infantAddClick() {
    const { infants } = this.state;
    this.setState({
      infants: infants + 1,
    });
  }

  infantSubClick() {
    const { infants } = this.state;
    if (infants > 0) {
      this.setState({
        infants: infants - 1,
      });
    }
  }

  render() {
    const {
      rates, calendarClicked, guestButtonClicked, adults, children, infants, averageRating, ratings, checkIn, checkOut, cleaningFee, serviceFee
    } = this.state;
    const checkInPlaceholder = `${dateFns.format(checkIn, 'MM/D/YYYY')}`
    const checkOutPlaceholder = `${dateFns.format(checkOut, 'MM/D/YYYY')}`
    const daysDifference = dateFns.differenceInCalendarDays(checkOut, checkIn);

    return (
      <div>
        <div className="rates">
          ${rates} per night
        </div>
        <Ratings averageRating={averageRating} />
        <span>
          {ratings}
        </span>
        <div>
          Dates
        </div>
        {checkIn === null ? (
          <input className="check-in" onClick={this.checkInClick} placeholder="Check in" />
        ) : (
          <input className="check-in" onClick={this.checkInClick} value={checkInPlaceholder} />
        )}
        <span>
          <i class="fas fa-arrow-right"></i>
        </span>

        {checkOut === null ? (
          <input className="check-out" onClick={this.checkOutClick} placeholder="Check out" />
        ) : (
          <input className="check-out" onClick={this.checkOutClick} value={checkOutPlaceholder} />
        )}
        {calendarClicked &&
          <Calendar checkInDateClick={this.checkInDateClick} />
        }
        <br />
        {guestButtonClicked ? (
          <Guests
            guestButtonClick={this.guestButtonClick}
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

        {checkOut &&
          (
            <div className="total">
              <div className="rates">
                <span>${rates} x {daysDifference} nights</span>
                <span> ${rates * daysDifference}</span>
              </div>
              <div className="cleaningFee">
                <span>
                  Cleaning fee <i class="far fa-question-circle"></i>
                </span>
                <span>
                  ${cleaningFee}
                </span>
              </div>
              <div className="serviceFee">
                <span>
                  Service fee <i class="far fa-question-circle"></i>
                </span>
                <span>
                  ${serviceFee}
                </span>
              </div>
            </div>
          )
        }

        <br />
        <input type="submit" value="Book" />
      </div>
    );
  }
}
export default App;
