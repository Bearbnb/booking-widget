import React from 'react';
import dateFns from 'date-fns';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMonth: new Date(),
      selectedDate: new Date()
    }
    this.nextMonthClick = this.nextMonthClick.bind(this)
    this.prevMonthClick = this.prevMonthClick.bind(this)
    this.onDateClick = this.onDateClick.bind(this)
  }

  renderHeader () {
    return (

      <tr>
      <th className="header" colSpan="1" align="left">
        <input onClick={this.prevMonthClick} type="button" value="<"/>
      </th>
      <th colSpan="5">
        <span>
          {dateFns.format(this.state.currentMonth, "MMMM YYYY")}
        </span>
      </th>
      <th colSpan="1" align="right">
        <input onClick={this.nextMonthClick} type="button" value=">"/>
      </th>
      </tr>

    )
  }

  renderDays() {
    const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    const daysList = [];

    for (let i = 0; i < days.length; i++) {
      daysList.push(
        <td key={days[i]}>
          {days[i]}
        </td>
      );
    }
    return <tbody className="dateHeader">{daysList}</tbody>
  }

  renderCells() {
    const currentMonth = this.state.currentMonth;
    const selectedDate = this.state.selectedDate;
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
          <td onClick={() => this.onDateClick(dateFns.parse(cloneDay))} key={day[i]}>
            <span>{formattedDate}</span>
          </td>
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <tr className="row">
        {days}
        </tr>
      );
      days = [];
    }
    return <tbody className="body">{rows}</tbody>;
  }

  onDateClick (date) {
    this.setState({
      selectedDate: date
    });
  }


  nextMonthClick () {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    })
  }

  prevMonthClick () {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
    })
  }

  render () {
    return (
      <div className="calendar">
        <table>
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
        </table>
      </div>
    )
  }
}

export default Calendar;
