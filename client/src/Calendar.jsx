import React from 'react';
import dateFns from 'date-fns';
import styled from 'styled-components';

const MonthHeader = styled.th`
  color: rgb(72, 72, 72) !important;
  font-size: 18px !important;
  text-align: center !important;
  padding-top: 10px !important;
  padding-bottom: 20px !important;
  caption-side: initial !important;
  font-weight: bold;
`;

const DaysHeader = styled.td`
  color: rgb(117, 117, 117) !important;
  font-size: 0.85em;
  left: 0px;
  padding: 0px 5px;
`;

const TableBorder = styled.table`
  border-spacing: 0px !important;
`;

const DaysBorder = styled.td`
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

const DaysText = styled.span`
  font-weight: 600 !important;
  height: 12px !important;
  line-height: 12px !important;
  text-align: center !important;
  width: 38px !important;
  color: rgb(72, 72, 72) !important;
  font-size: 14px !important;
`;

const MonthArrowContainer = styled.div`
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

const HideCalendar = styled.div`
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
  z-index: -1 !important;
`;


class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMonth: new Date(),
      selectedDate: new Date(),
    };
    this.nextMonthClick = this.nextMonthClick.bind(this);
    this.prevMonthClick = this.prevMonthClick.bind(this);
    this.onDateClick = this.onDateClick.bind(this);
  }

  onDateClick(date, callback) {
    this.setState({
      selectedDate: date,
    }, (error, results) => {
      if (error) {
        console.log(error)
      } else {
        callback(results);
      }
    });
  }

  nextMonthClick() {
    const { currentMonth } = this.state;
    this.setState({
      currentMonth: dateFns.addMonths(currentMonth, 1),
    });
  }

  prevMonthClick() {
    const { currentMonth } = this.state;
    this.setState({
      currentMonth: dateFns.subMonths(currentMonth, 1),
    });
  }

  clickEvents(cloneDay) {
    this.onDateClick(dateFns.parse(cloneDay), (error) => {
      if (error) {
        console.log(`ERROR clickEvents`, error)
      } else {
        this.props.checkInDateClick(this.state.selectedDate)
      }
    });
  }

  renderHeader() {
    const { currentMonth } = this.state;
    return (
      <tr>
        <th className="header" colSpan="1" align="left">
          <MonthArrowContainer>
            <i className="fas fa-arrow-left" onClick={this.prevMonthClick} type="button"></i>
          </MonthArrowContainer>
        </th>
        <MonthHeader colSpan="5">
            {dateFns.format(currentMonth, 'MMMM YYYY')}
        </MonthHeader>
        <th colSpan="1" align="right">
          <MonthArrowContainer>
            <i className="fas fa-arrow-right" onClick={this.nextMonthClick} type="button"></i>
          </MonthArrowContainer>
        </th>
      </tr>
    );
  }

  renderDays() {
    const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    const daysList = [];

    for (let i = 0; i < days.length; i++) {
      daysList.push(
        <DaysHeader key={days[i]}>
          {days[i]}
        </DaysHeader>
      );
    }
    return <tbody className="dateHeader">{daysList}</tbody>
  }

  renderCells() {
    const { currentMonth, selectedDate } = this.state;
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(currentMonth);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = '';

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, 'D');
        const cloneDay = day;
        days.push(
          <DaysBorder onClick={() => this.clickEvents(cloneDay)} key={day[i]}>
            <DaysText>
              {formattedDate}
            </DaysText>
          </DaysBorder>,
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <tr className="row">
          {days}
        </tr>,
      );
      days = [];
    }
    return <tbody className="body">{rows}</tbody>;
  }

  render() {
    const { hideCalendar } = this.props;
    return (
      <div className="calendar">
        <HideCalendar onClick={hideCalendar} />
        <TableBorder>
          {this.renderHeader()}
          {this.renderDays()}
          {this.renderCells()}
        </TableBorder>
      </div>
    );
  }
}

export default Calendar;
