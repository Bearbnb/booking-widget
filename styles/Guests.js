import styled from 'styled-components';

export const GuestsButton = styled.button`
  background: #ffffff !important;
  text-align: left !important;
  border-radius: 2px !important;
  padding: 8px !important;
  line-height: normal !important;
  display: block !important;
  width: 100% !important;
  border: 1px solid #EBEBEB !important;
`;

export const GuestButtonMargin = styled.div`
  margin-left: 8px;
  margin-right: 8px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const GuestsButtonLeftText = styled.div`
  font-size: 17px;
  justify-self: start;
`;

export const GuestButtonRightText = styled.div`
  font-size: 17px;
  justify-self: end;
`;

export const GuestsContainer = styled.div`
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

export const GuestsSectionContainer = styled.div`
  margin-top: 22px;
  margin-bottom: 22px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const GuestsSectionLeft = styled.div`
  font-weight: 600 !important;
  margin: 0px !important;
  word-wrap: break-word !important;
  font-size: 16px !important;
  line-height: 22px !important;
  letter-spacing: normal !important;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
  color: #484848 !important;
  justify-self: start;
`;

export const GuestsSectionRight = styled.div`
  font-weight: 600 !important;
  margin: 0px !important;
  word-wrap: break-word !important;
  font-size: 17px !important;
  line-height: 22px !important;
  letter-spacing: normal !important;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
  color: #484848 !important;
  justify-self: end;
`;

export const GuestsDescription = styled.div`
  margin-bottom: 10px;
  box-sizing: border-box;
  word-wrap: break-word !important;
  font-size: 14px !important;
  line-height: 18px !important;
  letter-spacing: normal !important;
  color: #484848 !important;
  font-weight: normal !important;
`;

export const GuestsCloseContainer = styled.div`
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: 1fr;
`;

export const GuestsCloseButton = styled.div`
  display: inline-block !important;
  vertical-align: middle !important;
  color: #008489 !important;
  background: transparent !important;
  cursor: pointer !important;
  justify-self: end;
`;

export const HideGuests = styled.div`
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
`;
