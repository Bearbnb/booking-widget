window.onload = () => {
  let currentDate = new Date();
  let monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Novemberåå', 'December'];
  let currentMonth = currentDate.getMonth();
  let currentYear = currentDate.getFullYear();
  let firstDateOfMonth = `${monthList[currentMonth]} 1 ${currentYear}`; // September 1 2018
  let firstDateOfMonthFull = new Date(firstDateOfMonth).toDateString(); // Sat Sep 01 2018
  let firstDateHeader = firstDateOfMonthFull.substring(0, 3); // Sa
  let dateHeader = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let dateHeaderIndex = dateHeader.indexOf(firstDateHeader);
  let totalDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  let calendar = createCalendar(dateHeaderIndex, totalDaysInMonth);
  document.getElementById('calendar-month-year').innerHTML = `${monthList[currentMonth]} ${currentYear}`;
  document.getElementById('calendar-dates').appendChild(calendar);
};



let createCalendar = (dateHeaderIndex, totalDaysInMonth) => {
  let table = document.createElement('table');
  let tr = document.createElement('tr');

  // Date Header Row
  for (let i = 0; i <= 6; i++) {
    let td = document.createElement('td');
    td.innerHTML = 'SMTWTFS'[i];
    tr.appendChild(td);
  }
  table.appendChild(tr);

  // Second Row Blanks
  tr = document.createElement('tr');
  let i;
  for (i = 0; i <= 6; i++) {
    if (i === dateHeaderIndex) {
      break;
    }
    const td = document.createElement('td');
    td.innerHTML = '';
    tr.appendChild(td);
  }

  let count = 1;
  for (; i <= 6; i++) {
    let td = document.createElement('td');
    td.innerHTML = count;
    count++;
    tr.appendChild(td);
  }
  table.appendChild(tr);
  // Rest of Date Rows
  for (let i = 3; i <= 7; i++) {
    tr = document.createElement('tr');
    for (let j = 0; j <= 6; j++) {
      if (count > totalDaysInMonth) {
        table.appendChild(tr);
        return table;
      }
      let td = document.createElement('td');
      td.innerHTML = count;
      count++
      tr.appendChild(td);
    }
    table.append(tr);
  }
  return table;
};
