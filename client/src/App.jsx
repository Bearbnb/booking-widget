import React from 'react';
import $ from 'jquery';
import dateFns from 'date-fns';
import styled, { css } from 'styled-components';
import Calendar from './Calendar.jsx';
import Guests from './Guests.jsx';
import Ratings from './Ratings.jsx';

const Rate = styled.span`
  word-wrap: break-word !important;
  font-size: 18px !important;
  box-sizing: border-box;
  line-height: 26px !important;
  letter-spacing: normal !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
  color: rgb(72, 72, 72) !important;
  font-weight: 800 !important;
  display: inline !important;
  margin: 0px !important;
`;

const RatePerNight = styled.span`
  font-weight: 600 !important;
  margin: 0px !important;
  word-wrap: break-word !important;
  font-size: 12px !important;
  line-height: 16px !important;
  letter-spacing: normal !important;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
  text-transform: undefined !important;
  color: #484848 !important;
  padding-top: undefined !important;
  padding-bottom: undefined !important;
  display: inline !important;
`;

const RatingNum = styled.span`
  font-weight: 600 !important;
  margin: 0px !important;
  word-wrap: break-word !important;
  font-size: 12px !important;
  line-height: 16px !important;
  letter-spacing: normal !important;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
  text-transform: undefined !important;
  color: #484848 !important;
  padding-top: undefined !important;
  padding-bottom: undefined !important;
  display: inline !important;
`;

const Dates = styled.div`
  font-weight: 600 !important;
  margin: 0px !important;
  word-wrap: break-word !important;
  font-size: 12px !important;
  line-height: 16px !important;
  letter-spacing: normal !important;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
  text-transform: undefined !important;
  color: #484848 !important;
  padding-top: undefined !important;
  padding-bottom: undefined !important;
`;

const BookingComp = styled.div`
  padding-left: 24px !important;
  padding-right: 24px !important;
  margin: 0px !important;
  border: 1px solid #e4e4e4 !important;
  background-color: #ffffff !important;
  position: fixed;
  top: 75px;
`

const BookingMargin = styled.div`
  margin-top: 16px;
  margin-bottom: 24px;
`
const RateBorderBottom = styled.div`
  border-bottom: 1px solid #EBEBEB !important;
`

const MarginRates = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
`

const MarginDates = styled.div`
  margin-top: 16px;
  margin-bottom: 8px;
`

const MarginDateText = styled.div`
  font-size: 17px !important;
  font-weight: 200 !important;
  margin: 0px !important;
  padding: 0px !important;
  padding-bottom: 4px !important;
`

const DateInput = styled.div`
  background-color: #fff !important;
  display: block !important;
  border: 1px solid #EBEBEB !important;
  border-radius: 2px !important;
  width: 100% !important;
`

const CheckInMargin = styled.div`
  font-weight: normal !important;
  font-size: 17px !important;
  line-height: 22px !important;
  color: #757575 !important;
  margin: 0px !important;
  padding: 8px !important;
  background: #fff !important;
  position: relative !important;
  display: inline-block !important;
  width: -webkit-calc(50% - 12px) !important;
  width: -moz-calc(50% - 12px) !important;
  width: calc(50% - 12px) !important;
  vertical-align: middle !important;
`

const CheckInInput = styled.input`
  position: absolute !important;
  top: 0px !important;
  left: 0px !important;
  border: 0px !important;
  height: 100% !important;
  width: 100% !important;
  display: block;
  padding: 8px 10px;
  border-radius: 2px;
  background-color: #fff;
  color: #484848;
`

const ArrowMargin = styled.span`
  display: inline-block !important;
  vertical-align: middle !important;
`

const CheckOutMargin = styled.div`
  font-weight: normal !important;
  font-size: 17px !important;
  line-height: 22px !important;
  color: #757575 !important;
  margin: 0px !important;
  padding: 8px !important;
  background: #fff !important;
  position: relative !important;
  display: inline-block !important;
  width: -webkit-calc(50% - 12px) !important;
  width: -moz-calc(50% - 12px) !important;
  width: calc(50% - 12px) !important;
  vertical-align: middle !important;
`


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
    if (checkIn === null || checkIn > dateFns.format(date, 'YYYY-MM-DD')) {
      this.setState({
        checkIn: dateFns.format(date, 'YYYY-MM-DD'),
      }, (error) => {
        if (error) {
          console.error(`ERROR checkInDateClick failed`, error)
        } else {
          this.getCalendarData();
        }
      });
    } else {
      this.setState({
        checkOut: dateFns.format(date, 'YYYY-MM-DD'),
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
      <BookingComp>
        <BookingMargin>
          <div>
            <div>
              <Rate>
                $
                {rates}
              </Rate>
              <RatePerNight>
                per night
              </RatePerNight>
            </div>
            <div>
              <Ratings averageRating={averageRating} />
              <RatingNum>
                {ratings}
              </RatingNum>
            </div>
            <MarginRates>
              <RateBorderBottom />
            </MarginRates>
          </div>
          <div>
            <MarginDateText>
              <Dates>
                Dates
              </Dates>
            </MarginDateText>
            <DateInput>
              {checkIn === null ? (
                <CheckInMargin>
                  <CheckInInput placeholder="Check in" onClick={this.checkInClick}>
                  </CheckInInput>
                </CheckInMargin>
              ) : (
                <CheckInMargin>
                  <CheckInInput className="check-in" onClick={this.checkInClick} value={checkInPlaceholder} />
                </CheckInMargin>
              )}
              <ArrowMargin>
                <i className="fas fa-arrow-right"></i>
              </ArrowMargin>
              <CheckOutMargin>
                {checkOut === null ? (
                  <input className="check-out" onClick={this.checkOutClick} placeholder="Check out" />
                ) : (
                  <input className="check-out" onClick={this.checkOutClick} value={checkOutPlaceholder} />
                )}
                {calendarClicked &&
                  <Calendar checkInDateClick={this.checkInDateClick} />
                }
              </CheckOutMargin>
            </DateInput>
          </div>
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

      </BookingMargin>
      </BookingComp>
    );
  }
}
export default App;
