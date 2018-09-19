import styled from 'styled-components';

export const MonthHeader = styled.th`
  color: rgb(72, 72, 72) !important;
  font-size: 18px !important;
  text-align: center !important;
  padding-top: 10px !important;
  padding-bottom: 20px !important;
  caption-side: initial !important;
  font-weight: bold;
`;

export const DaysHeader = styled.td`
  color: rgb(117, 117, 117) !important;
  font-size: 0.85em;
  left: 0px;
  padding: 0px 5px;
`;

export const TableBorder = styled.table`
  border-spacing: 0px !important;
`;

export const DaysBorder = styled.td`
  width: 25px;
  height: 15px;
  border: 1px solid rgb(228, 231, 231);
  color: rgb(72, 72, 72);
  background: rgb(255, 255, 255);
  position: relative !important;
  cursor: pointer !important;
  font-size: 14px !important;
  text-align: center !important;
  width:'100%';
  padding: 8px;
`;

export const DaysText = styled.span`
  font-weight: 600 !important;
  height: 12px !important;
  line-height: 12px !important;
  text-align: center !important;
  width: 38px !important;
  color: rgb(72, 72, 72) !important;
  font-size: 14px !important;
`;

export const MonthArrowContainer = styled.div`
  cursor: pointer !important;
  background-color: rgb(255, 255, 255) !important;
  color: rgb(117, 117, 117) !important;
  border-width: 1px !important;
  border-style: solid !important;
  border-color: rgb(228, 231, 231) !important;
  border-radius: 3px !important;
  padding: 6px !important;
  position: relative;
  top: -5px;
  text-align: center !important;

`;

export const HideCalendar = styled.div`
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
`;
