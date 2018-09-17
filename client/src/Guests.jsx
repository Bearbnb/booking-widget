import React from 'react';
import styled from 'styled-components';

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

const GuestButtonMargin = styled.div`
  margin-left: 8px;
  margin-right: 8px;
`;

const GuestsButtonText = styled.div`
  font-size: 17px;
  margin: 0;
  padding: 0;
`;

const GuestsContainer = styled.div`
  position: absolute !important;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px !important;
  width: 100% !important;
  min-width: 280px !important;
  text-align: left !important;
  margin-bottom: 16px !important;
  box-sizing: border-box !important;
  z-index: 2 !important;
  left: 0px !important;
  background: rgb(255, 255, 255) !important;
  border-radius: 3px !important;
  padding: 0px 16px !important;
`;

const GuestsSectionContainer = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const GuestsSectionLeft = styled.div`
  font-size: 14px;
  line-height: 1.43;
  color: #484848;
  background-color: #fff;
  justify-self: start;
`;

const GuestsSectionRight = styled.div`
  font-size: 14px;
  line-height: 1.43;
  color: #484848;
  background-color: #fff;
  justify-self: end;
`;

const GuestsDescription = styled.div`
  margin-bottom: 16px;
  box-sizing: border-box;
  word-wrap: break-word !important;
  font-size: 14px !important;
  line-height: 18px !important;
  letter-spacing: normal !important;
  color: #484848 !important;
  font-weight: normal !important;
`;

const GuestsCloseContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

const GuestsCloseButton = styled.div`
  display: inline-block !important;
  vertical-align: middle !important;
  color: #008489 !important;
  background: transparent !important;
  cursor: pointer !important;
  justify-self: end;
`;

class Guests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const { adults, children, infants, adultAddClick, adultSubClick, childrenAddClick, childrenSubClick, infantAddClick, infantSubClick, guestButtonClick } = this.props;

    return (
      <div>
        <GuestsButton onClick={guestButtonClick}>
          <GuestButtonMargin>
            {infants < 1 ? (
              <GuestsButtonText>
                {adults + children } Guests
              </GuestsButtonText>
            ) : (
              <GuestsButtonText>
                {adults + children} Guests, {infants} Infants
              </GuestsButtonText>
            )}
          </GuestButtonMargin>
        </GuestsButton>
        <GuestsContainer>
          <GuestsSectionContainer>
            <GuestsSectionLeft>
              Adults
            </GuestsSectionLeft>
            <GuestsSectionRight>
              <i onClick={adultAddClick} className="fas fa-plus-circle"></i> {adults} <i onClick={adultSubClick} className="fas fa-minus-circle"></i>
            </GuestsSectionRight>
          </GuestsSectionContainer>
          <GuestsSectionContainer>
            <GuestsSectionLeft>
              Children
            </GuestsSectionLeft>
            <GuestsSectionRight>
              <i onClick={childrenAddClick} className="fas fa-plus-circle"></i> {children} <i onClick={childrenSubClick} className="fas fa-minus-circle"></i>
            </GuestsSectionRight>
          </GuestsSectionContainer>
          <GuestsSectionContainer>
            <GuestsSectionLeft>
              Infants
            </GuestsSectionLeft>
            <GuestsSectionRight>
              <i onClick={infantAddClick} className="fas fa-plus-circle"></i> {infants} <i onClick={infantSubClick} className="fas fa-minus-circle"></i>
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
