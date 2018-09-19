import styled from 'styled-components';

export const Rate = styled.span`
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

export const RatePerNight = styled.span`
  font-weight: 600 !important;
  word-wrap: break-word !important;
  font-size: 12px !important;
  line-height: 16px !important;
  color: #484848 !important;
  display: inline !important;
`;

export const RatingNum = styled.span`
  font-weight: 600 !important;
  word-wrap: break-word !important;
  font-size: 12px !important;
  line-height: 16px !important;
  letter-spacing: normal !important;
  color: #484848 !important;
  padding-left: 3px !important;
  display: inline !important;
  position: relative;
  top: 1px
`;

export const Dates = styled.div`
  font-weight: 600 !important;
  word-wrap: break-word !important;
  font-size: 12px !important;
  line-height: 16px !important;
  color: #484848 !important;
`;

export const BookingComp = styled.div`
  padding-left: 24px !important;
  padding-right: 24px !important;
  border: 1px solid #e4e4e4 !important;
  background-color: #ffffff !important;
  position: fixed;
  top: 75px;
`;

export const BookingMargin = styled.div`
  margin-top: 16px;
  margin-bottom: 24px;
`;

export const LineDivider = styled.div`
  border-bottom: 1px solid #EBEBEB !important;
`;

export const MarginRates = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const MarginDateText = styled.div`
  font-size: 17px !important;
  font-weight: 200 !important;
  margin: 0px !important;
  padding: 0px !important;
  padding-bottom: 4px !important;
`;

export const DateInputContainer = styled.div`
  background-color: #fff !important;
  display: block !important;
  border: 1px solid #EBEBEB !important;
  border-radius: 2px !important;
  width: 100% !important;
  position: relative !important;
  box-sizing: border-box;
`;

export const CheckInMargin = styled.div`
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

export const CheckInInput = styled.input`
  border: 0px !important;
  font-size: 17px !important;
  line-height: 22px !important;
  color: #757575 !important;
`;

export const ArrowMargin = styled.span`
  display: inline-block !important;
  vertical-align: middle !important;
`;

export const CheckOutMargin = styled.div`
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

export const CalendarContainerOuter = styled.div`
  z-index: 1 !important;
  background-color: rgb(255, 255, 255) !important;
  position: absolute !important;
  top: 51px !important;
  right: 127px !important;
`;

export const CalendarContainer = styled.div`
  position: relative !important;
  text-align: left !important;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px !important;
  background: rgb(255, 255, 255) !important;
  border-radius: 3px !important;
  padding: 15px;
`;

export const GuestsMargin = styled.div`
  margin-top: 8px;
  margin-bottom: 16px;
`;

export const GuestsText = styled.small`
  font-weight: 600 !important;
  word-wrap: break-word !important;
  font-size: 12px !important;
  line-height: 16px !important;
  letter-spacing: normal !important;
  color: #484848 !important;
`;

export const GuestsButton = styled.button`
  background: #ffffff !important;
  text-align: left !important;
  border-radius: 2px !important;
  padding: 8px !important;
  line-height: normal !important;
  display: block !important;
  width: 100% !important;
  border: 1px solid #EBEBEB !important;
  margin-top: 4px;
`;

export const GuestsButtonContainer = styled.div`
  margin-left: 8px;
  margin-right: 8px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const GuestsButtonLeftText = styled.div`
  font-size: 17px;
  justify-self: start;
  color: #484848 !important;
`;

export const GuestButtonRightText = styled.div`
  font-size: 17px;
  justify-self: end;
`;

export const BookingButtonMargin = styled.div`
  margin-top: 24px;
`;

export const BookingButton = styled.button`
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

export const BookingButtonInner = styled.span`
  font-size: 16px !important;
  line-height: 22px !important;
  letter-spacing: normal !important;
  color: inherit !important;
`;

export const BookingButtonText = styled.div`
  margin: 0px !important;
  word-wrap: break-word !important;
  font-size: 16px !important;
  line-height: 22px !important;
  letter-spacing: normal !important;
  font-weight: 800 !important;
  color: #ffffff !important;
`;

export const TotalMargin = styled.div`
  margin-bottom: 8px;
`;

export const TotalSectionMargin = styled.div`
  width: 100% !important;
  box-sizing: border-box;
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
`;

export const TotalSectionLeftText = styled.span`
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

export const TotalSectionRightText = styled.span`
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

export const TotalDividerMargin = styled.div`
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const TotalSectionBottomLeftText = styled.div`
  font-weight: 600 !important;
  word-wrap: break-word !important;
  font-size: 14px !important;
  line-height: 18px !important;
  letter-spacing: normal !important;
  color: rgb(72, 72, 72) !important;
  justify-self: start;
`;

export const TotalSectionBottomRightText = styled.div`
  font-weight: 600 !important;
  word-wrap: break-word !important;
  font-size: 14px !important;
  line-height: 18px !important;
  letter-spacing: normal !important;
  color: rgb(72, 72, 72) !important;
  margin: 0px !important;
  justify-self: end;
`;

export const ChargedTextContainer = styled.div`
  margin-top: 8px;
  box-sizing: border-box;
  text-align: center !important;
`;

export const ChargedText = styled.small`
  font-weight: 500 !important;
  word-wrap: break-word !important;
  font-size: 12px !important;
  line-height: 16px !important;
  letter-spacing: normal !important;
  color: #484848 !important;
`;
