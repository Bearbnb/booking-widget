import React from 'react';
import $ from 'jquery';
import dateFns from 'date-fns';
import styled from 'styled-components';
import Calendar from './Calendar.jsx';
import Guests from './Guests.jsx';
import Ratings from './Ratings.jsx';

const Rate = styled.span`
  word-wrap: break-word !important;
  font-size: 18px !important;
  box-sizing: border-box;
  line-height: 26px !important;
  letter-spacing: normal !important;
  color: rgb(72, 72, 72) !important;
  font-weight: 800 !important;
  display: inline !important;
  padding-right: 3px !important;
`;

const RatePerNight = styled.span`
  font-weight: 600 !important;
  word-wrap: break-word !important;
  font-size: 12px !important;
  line-height: 16px !important;
  color: #484848 !important;
  display: inline !important;
`;

const RatingNum = styled.span`
  font-weight: 600 !important;
  word-wrap: break-word !important;
  font-size: 12px !important;
  line-height: 16px !important;
  letter-spacing: normal !important;
  color: #484848 !important;
  padding-left: 3px !important;
  display: inline !important;
`;

const Dates = styled.div`
  font-weight: 600 !important;
  word-wrap: break-word !important;
  font-size: 12px !important;
  line-height: 16px !important;
  color: #484848 !important;
`;

const BookingComp = styled.div`
  padding-left: 24px !important;
  padding-right: 24px !important;
  border: 1px solid #e4e4e4 !important;
  background-color: #ffffff !important;
  position: fixed;
  top: 75px;
`;

const BookingMargin = styled.div`
  margin-top: 16px;
  margin-bottom: 24px;
`;

const LineDivider = styled.div`
  border-bottom: 1px solid #EBEBEB !important;
`;

const MarginRates = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
`;

const MarginDates = styled.div`
  margin-top: 16px;
  margin-bottom: 8px;
`;

const MarginDateText = styled.div`
  font-size: 17px !important;
  font-weight: 200 !important;
  margin: 0px !important;
  padding: 0px !important;
  padding-bottom: 4px !important;
`;

const DateInputContainer = styled.div`
  background-color: #fff !important;
  display: block !important;
  border: 1px solid #EBEBEB !important;
  border-radius: 2px !important;
  width: 100% !important;
  position: relative !important;
  box-sizing: border-box;
`;

const CheckInMargin = styled.div`
  font-size: 17px !important;
  line-height: 22px !important;
  color: #757575 !important;
  padding: 8px !important;
  background: #fff !important;
  position: relative !important;
  display: inline-block !important;
  width: -webkit-calc(50% - 12px) !important;
  width: -moz-calc(50% - 12px) !important;
  width: calc(50% - 12px) !important;
  vertical-align: middle !important;
  box-sizing: border-box;
`;

const CheckInInput = styled.input`
  border: 0px !important;
  font-size: 17px !important;
  line-height: 22px !important;
  color: #757575 !important;
`;

const ArrowMargin = styled.span`
  display: inline-block !important;
  vertical-align: middle !important;
`;

const CheckOutMargin = styled.div`
  font-weight: normal !important;
  font-size: 17px !important;
  line-height: 22px !important;
  color: #757575 !important;
  padding: 8px !important;
  background: #fff !important;
  position: relative !important;
  display: inline-block !important;
  width: -webkit-calc(50% - 12px) !important;
  width: -moz-calc(50% - 12px) !important;
  width: calc(50% - 12px) !important;
  vertical-align: middle !important;
  box-sizing: border-box;
`;

const CalendarContainerOuter = styled.div`
  z-index: 1 !important;
  background-color: rgb(255, 255, 255) !important;
  position: absolute !important;
  top: 51px !important;
  right: 172px !important;
`;

const CalendarContainer = styled.div`
  position: relative !important;
  text-align: left !important;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px !important;
  background: rgb(255, 255, 255) !important;
  border-radius: 3px !important;
  padding: 15px;
`;

const GuestsMargin = styled.div`
  margin-top: 8px;
  margin-bottom: 16px;
`;

const GuestsText = styled.small`
  font-weight: 600 !important;
  word-wrap: break-word !important;
  font-size: 12px !important;
  line-height: 16px !important;
  letter-spacing: normal !important;
  color: #484848 !important;
`;

const GuestsButton = styled.button`
  background: #ffffff !important;
  text-align: left !important;
  border-radius: 2px !important;
  padding: 8px !important;
  line-height: normal !important;
  display: block !important;
  width: 100% !important;
  border: 1px solid #EBEBEB !important;
`;

const GuestsButtonMargin = styled.div`
  margin-left: 8px;
  margin-right: 8px;
`;

const GuestsButtonText = styled.div`
  font-size: 17px;
`;

const BookingButtonMargin = styled.div`
  margin-top: 24px;
`;

const BookingButton = styled.button`
  cursor: pointer !important;
  display: inline-block !important;
  margin: 0px !important;
  position: relative !important;
  text-align: center !important;
  text-decoration: none !important;
  -webkit-transition-property: background, border-color, color !important;
  -moz-transition-property: background, border-color, color !important;
  transition-property: background, border-color, color !important;
  -webkit-transition-duration: 0.2s !important;
  transition-duration: 0.2s !important;
  -webkit-transition-timing-function: ease-out !important;
  transition-timing-function: ease-out !important;
  border-radius: 4px !important;
  width: 100% !important;
  font-size: 16px !important;
  line-height: 22px !important;
  letter-spacing: normal !important;
  text-transform: undefined !important;
  padding-top: 12px !important;
  padding-bottom: 12px !important;
  font-weight: 800 !important;
  border-width: 2px !important;
  border-style: solid !important;
  padding-left: 24px !important;
  padding-right: 24px !important;
  min-width: 77.66563145999496px !important;
  background: #FF5A5F !important;
  border-color: transparent !important;
  color: #ffffff !important;
`;

const BookingButtonInner = styled.span`
  font-size: 16px !important;
  line-height: 22px !important;
  letter-spacing: normal !important;
  color: inherit !important;
`;

const BookingButtonText = styled.div`
  margin: 0px !important;
  word-wrap: break-word !important;
  font-size: 16px !important;
  line-height: 22px !important;
  letter-spacing: normal !important;
  font-weight: 800 !important;
  color: #ffffff !important;
`;

const TotalMargin = styled.div`
  margin-bottom: 8px;
`;

const TotalSectionMargin = styled.div`
  width: 100% !important;
  box-sizing: border-box;
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
`;

const TotalSectionLeftText = styled.span`
  word-wrap: break-word !important;
  font-size: 14px !important;
  line-height: 18px !important;
  letter-spacing: normal !important;
  color: #484848 !important;
  font-weight: normal !important;
  display: inline !important;
  vertical-align: middle !important;
  justify-self: start;
`;

const TotalSectionRightText = styled.span`
  margin: 0px !important;
  word-wrap: break-word !important;
  font-size: 14px !important;
  line-height: 18px !important;
  letter-spacing: normal !important;
  color: #484848 !important;
  font-weight: normal !important;
  display: inline !important;
  vertical-align: middle !important;
  justify-self: end;
`;

const TotalDividerMargin = styled.div`
  margin-top: 8px;
  margin-bottom: 8px;
`;

const TotalSectionBottomText = styled.div`
  font-weight: 600 !important;
  word-wrap: break-word !important;
  font-size: 14px !important;
  line-height: 18px !important;
  letter-spacing: normal !important;
  color: rgb(72, 72, 72) !important;
  display: inline !important;
  margin: 0px !important;
  box-sizing: border-box;
`;

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
      taxes: 0,
    };
    this.checkInClick = this.checkInClick.bind(this);
    this.checkOutClick = this.checkOutClick.bind(this);
    this.checkInDateClick = this.checkInDateClick.bind(this);
    this.guestButtonClick = this.guestButtonClick.bind(this);
    this.adultAddClick = this.adultAddClick.bind(this);
    this.adultSubClick = this.adultSubClick.bind(this);
    this.childrenAddClick = this.childrenAddClick.bind(this);
    this.childrenSubClick = this.childrenSubClick.bind(this);
    this.infantAddClick = this.infantAddClick.bind(this);
    this.infantSubClick = this.infantSubClick.bind(this);
    this.bookingButtonClick = this.bookingButtonClick.bind(this);
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
          ratings: results[0].ratings,
          cleaningFee: results[0].cleaning_fee,
          serviceFee: results[0].service_fee,
          rates: results[0].average_rate,
          taxes: results[0].taxes,
        });
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  postBookingData() {
    $.ajax({
      method: 'POST',
      url: '/houses/5/check_in/' + dateFns.format(this.state.checkIn, 'YYYY-MM-DD') + '/check_out/' + dateFns.format(this.state.checkOut, 'YYYY-MM-DD'),
      contentType: 'application/json',
      data: JSON.stringify({house_id: 1, check_in: dateFns.format(this.state.checkIn, 'YYYY-MM-DD'), check_out: dateFns.format(this.state.checkOut, 'YYYY-MM-DD'), adults: this.state.adults, children: this.state.children, infants: this.state.infants, price: this.state.rates, cleaning_fee: this.state.cleaningFee, service_fee: this.state.serviceFee, taxes: this.state.taxes}),
      success: (results) => {
        console.log(JSON.stringify(results))
      },
      error: (error) => {
        console.log(error);
      },
    })
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

  bookingButtonClick() {
    this.postBookingData();
  }

  checkInDateClick(date) {
    const { checkIn, checkOut, calendarClicked } = this.state;
    if (checkIn === null || checkIn > dateFns.format(date, 'YYYY-MM-DD')) {
      this.setState({
        checkIn: dateFns.format(date, 'YYYY-MM-DD'),
      }, (error) => {
        if (error) {
          console.error('ERROR checkInDateClick failed', error)
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
          console.error('ERROR checkInDateClick failed', error)
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
      rates, calendarClicked, guestButtonClicked, adults, children, infants, averageRating, ratings, checkIn, checkOut, cleaningFee, serviceFee, taxes,
    } = this.state;
    const checkInPlaceholder = `${dateFns.format(checkIn, 'MM/D/YYYY')}`;
    const checkOutPlaceholder = `${dateFns.format(checkOut, 'MM/D/YYYY')}`;
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
              <LineDivider />
            </MarginRates>
          </div>
          <div>
            <MarginDateText>
              <Dates>
                Dates
              </Dates>
            </MarginDateText>
            <DateInputContainer>
              {checkIn === null ? (
                <CheckInMargin>
                  <CheckInInput placeholder="Check in" onClick={this.checkInClick} />
                </CheckInMargin>
              ) : (
                <CheckInMargin>
                  <CheckInInput className="check-in" onClick={this.checkInClick} value={checkInPlaceholder} />
                </CheckInMargin>
              )}
              <ArrowMargin>
                <i className="fas fa-arrow-right" />
              </ArrowMargin>
              <CheckOutMargin>
                {checkOut === null ? (
                  <CheckInInput className="check-out" onClick={this.checkOutClick} placeholder="Check out" />
                ) : (
                  <CheckInInput className="check-out" onClick={this.checkOutClick} value={checkOutPlaceholder} />
                )}
                {calendarClicked && (
                  <CalendarContainerOuter>
                    <CalendarContainer>
                      <Calendar checkInDateClick={this.checkInDateClick} />
                    </CalendarContainer>
                  </CalendarContainerOuter>
                )}
              </CheckOutMargin>
            </DateInputContainer>
          </div>
          <GuestsMargin>
            <GuestsText>
              Guests
            </GuestsText>
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
              <GuestsButton onClick={this.guestButtonClick}>
                <GuestsButtonMargin>
                  {infants < 1 ? (
                    <GuestsButtonText>
                      {adults + children } Guests
                    </GuestsButtonText>
                  ) : (
                    <GuestsButtonText>
                      {adults + children} Guests, {infants} Infants
                    </GuestsButtonText>
                  )}
                </GuestsButtonMargin>
              </GuestsButton>
            )}
          </GuestsMargin>

          {checkOut &&
            (
              <TotalMargin>
                <TotalSectionMargin>
                    <TotalSectionLeftText>${rates} x {daysDifference} nights</TotalSectionLeftText>
                    <TotalSectionRightText>${rates * daysDifference}</TotalSectionRightText>
                </TotalSectionMargin>
                <TotalDividerMargin>
                  <LineDivider />
                </TotalDividerMargin>
                <TotalSectionMargin>
                    <TotalSectionLeftText>
                      Cleaning fee <i class="far fa-question-circle" />
                    </TotalSectionLeftText>
                    <TotalSectionRightText>
                      $
                      {cleaningFee}
                    </TotalSectionRightText>
                </TotalSectionMargin>
                <TotalDividerMargin>
                  <LineDivider />
                </TotalDividerMargin>
                <TotalSectionMargin>
                    <TotalSectionLeftText>
                      Service fee <i class="far fa-question-circle" />
                    </TotalSectionLeftText>
                    <TotalSectionRightText>
                      $
                      {serviceFee}
                    </TotalSectionRightText>
                </TotalSectionMargin>
                <TotalDividerMargin>
                  <LineDivider />
                </TotalDividerMargin>
                <TotalSectionMargin>
                    <TotalSectionLeftText>
                      Occupancy taxes and fees <i class="far fa-question-circle" />
                    </TotalSectionLeftText>
                    <TotalSectionRightText>
                      $
                      {taxes}
                    </TotalSectionRightText>
                </TotalSectionMargin>
                <TotalDividerMargin>
                  <LineDivider />
                </TotalDividerMargin>
                <TotalSectionMargin>
                  <TotalSectionBottomText>
                    Total
                  </TotalSectionBottomText>
                    <TotalSectionRightText>
                      $
                      {rates * daysDifference + cleaningFee + serviceFee + taxes}
                    </TotalSectionRightText>
                </TotalSectionMargin>
                <TotalDividerMargin>
                  <LineDivider />
                </TotalDividerMargin>
              </TotalMargin>
            )
          }
          <BookingButtonMargin>
            <BookingButton>
              <BookingButtonInner>
                <BookingButtonText onClick={this.bookingButtonClick}>
                  Request to Book
                </BookingButtonText>
              </BookingButtonInner>
            </BookingButton>
          </BookingButtonMargin>
        </BookingMargin>
      </BookingComp>
    );
  }
}
export default App;
