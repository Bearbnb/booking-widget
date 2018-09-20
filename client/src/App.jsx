import React from 'react';
import $ from 'jquery';
import dateFns from 'date-fns';
import Calendar from './Calendar.jsx';
import Guests from './Guests.jsx';
import Ratings from './Ratings.jsx';
import {
 TestDiv, Rate, RatePerNight, RatingNum, Dates, BookingComp, BookingMargin, LineDivider, MarginRates, MarginDateText, DateInputContainer, CheckInMargin, CheckInInput, ArrowMargin, CheckOutMargin, CalendarContainerOuter, CalendarContainer, GuestsMargin, GuestsText, GuestsButton, GuestsButtonContainer, GuestsButtonLeftText, GuestButtonRightText, BookingButtonMargin, BookingButton, BookingButtonInner, BookingButtonText, TotalMargin, TotalSectionMargin, TotalSectionLeftText, TotalSectionRightText, TotalDividerMargin, TotalSectionBottomLeftText, TotalSectionBottomRightText, ChargedTextContainer, ChargedText
} from '../../styles/App';

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
    this.hideCalendar = this.hideCalendar.bind(this);
    this.hideGuests = this.hideGuests.bind(this);
  }

  componentDidMount() {
    this.getHouseData();
  }

  getCalendarData() {
    const idPath = window.location.pathname;
    const id = idPath.substring(1, idPath.length - 1)

    const { checkIn } = this.state;
    $.ajax({
      method: 'GET',
      url: `/bookings/${id}/check_in/${checkIn}`,
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
    const idPath = window.location.pathname;
    const id = idPath.substring(1, idPath.length - 1)

    $.ajax({
      method: 'GET',
      url: `/bookings/${id}`,
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
    const idPath = window.location.pathname;
    const id = idPath.substring(1, idPath.length - 1)
    const { checkIn, checkOut, adults, children, infants, rates, cleaningFee, serviceFee, taxes } = this.state;
    $.ajax({
      method: 'POST',
      url: `/bookings/${id}/check_in/${dateFns.format(checkIn, 'YYYY-MM-DD')}/check_out/${dateFns.format(checkOut, 'YYYY-MM-DD')}`,
      contentType: 'application/json',
      data: JSON.stringify({ house_id: id, check_in: dateFns.format(checkIn, 'YYYY-MM-DD'), check_out: dateFns.format(checkOut, 'YYYY-MM-DD'), adults, children, infants, price: rates, cleaning_fee: cleaningFee, service_fee: serviceFee, taxes }),
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

  guestButtonClick() {
    const { guestButtonClicked } = this.state;
    this.setState({
      guestButtonClicked: !guestButtonClicked,
    });
  }

  bookingButtonClick() {
    this.postBookingData();
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

  hideCalendar() {
    this.setState({
      calendarClicked: false,
    });
  }

  hideGuests() {
    this.setState({
      guestButtonClicked: false,
    });
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
                      <Calendar checkInDateClick={this.checkInDateClick} hideCalendar={this.hideCalendar} />
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
                hideGuests={this.hideGuests}
              />
            ) : (
              <GuestsButton onClick={this.guestButtonClick}>
                {infants < 1 ? (
                  <GuestsButtonContainer>
                    <GuestsButtonLeftText>
                      {adults + children } Guests
                    </GuestsButtonLeftText>
                    <GuestButtonRightText>
                      <i className="fas fa-angle-down"></i>
                    </GuestButtonRightText>
                </GuestsButtonContainer>
                ) : (
                  <GuestsButtonContainer>
                    <GuestsButtonLeftText>
                      {adults + children} Guests, {infants} Infants
                    </GuestsButtonLeftText>
                    <GuestButtonRightText>
                      <i className="fas fa-angle-down"></i>
                    </GuestButtonRightText>
                </GuestsButtonContainer>
                )}
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
                  <TotalSectionBottomLeftText>
                    Total
                  </TotalSectionBottomLeftText>
                  <TotalSectionBottomRightText>
                    $
                    {rates * daysDifference + cleaningFee + serviceFee + taxes}
                  </TotalSectionBottomRightText>
                </TotalSectionMargin>
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
          <ChargedTextContainer>
            <ChargedText>
              You won’t be charged yet
            </ChargedText>
          </ChargedTextContainer>
        </BookingMargin>
      </BookingComp>
    );
  }
}
export default App;
