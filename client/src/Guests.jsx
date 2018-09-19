import React from 'react';
import {
  GuestsButton, GuestButtonMargin, GuestsButtonLeftText, GuestButtonRightText, GuestsContainer, GuestsSectionContainer, GuestsSectionLeft, GuestsSectionRight, GuestsDescription, GuestsCloseContainer, GuestsCloseButton, HideGuests,
} from '../../styles/Guests'

class Guests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const { adults, children, infants, adultAddClick, adultSubClick, childrenAddClick, childrenSubClick, infantAddClick, infantSubClick, guestButtonClick, hideGuests } = this.props;

    return (
      <div>
        <HideGuests onClick={hideGuests} />
        <GuestsButton onClick={guestButtonClick}>
          {infants < 1 ? (
            <GuestButtonMargin>
              <GuestsButtonLeftText>
                {adults + children } Guests
              </GuestsButtonLeftText>
              <GuestButtonRightText>
                <i className="fas fa-angle-up"></i>
              </GuestButtonRightText>
            </GuestButtonMargin>
          ) : (
            <GuestButtonMargin>
              <GuestsButtonLeftText>
                {adults + children} Guests, {infants} Infants
              </GuestsButtonLeftText>
              <GuestButtonRightText>
                <i className="fas fa-angle-up"></i>
              </GuestButtonRightText>
            </GuestButtonMargin>
          )}
        </GuestsButton>
        <GuestsContainer>
          <GuestsSectionContainer>
            <GuestsSectionLeft>
              Adults
            </GuestsSectionLeft>
            <GuestsSectionRight>
              <i onClick={adultSubClick} className="fas fa-minus-circle"></i> {adults} <i onClick={adultAddClick} className="fas fa-plus-circle"></i>
            </GuestsSectionRight>
          </GuestsSectionContainer>
          <GuestsSectionContainer>
            <GuestsSectionLeft>
              Children
            </GuestsSectionLeft>
            <GuestsSectionRight>
              <i onClick={childrenSubClick} className="fas fa-minus-circle"></i> {children} <i onClick={childrenAddClick} className="fas fa-plus-circle"></i>
            </GuestsSectionRight>
          </GuestsSectionContainer>
          <GuestsSectionContainer>
            <GuestsSectionLeft>
              Infants
            </GuestsSectionLeft>
            <GuestsSectionRight>
              <i onClick={infantSubClick} className="fas fa-minus-circle"></i> {infants} <i onClick={infantAddClick} className="fas fa-plus-circle"></i>
            </GuestsSectionRight>
          </GuestsSectionContainer>
          <GuestsDescription>
            <p>
              2 guests maximum. Infants don’t count toward the number of guests.
            </p>
          </GuestsDescription>
          <GuestsCloseContainer>
            <GuestsCloseButton>
              <p onClick={guestButtonClick}>Close</p>
            </GuestsCloseButton>
          </GuestsCloseContainer>
        </GuestsContainer>
      </div>
    );
  }
}

export default Guests;
