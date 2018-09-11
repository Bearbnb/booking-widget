import React from 'react'
import Calendar from './Calendar.jsx'
import $ from "jquery";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check_in: '',
      check_out: '',
      adults: '',
      children: '',
      infants: '',
      totalGuests: '',
      rates: '',
    }
  }

  getHouseData () {
    $.ajax({
      method: 'GET',
      url: '/houses/1',
      success: (results) => {
        console.log('GET request called!')
        console.log(results)
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  componentDidMount () {
    this.getHouseData();
  }

  render() {
    return (
      <div>
        <Calendar />
        <input type="submit" value="Book"/>
      </div>
    )
  }
}

export default App;
