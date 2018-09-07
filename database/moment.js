const moment = require('moment');
// moment().format();

// let date = new Date ('2017/12/31');
// let dateString = moment(date).add(1, 'add').format('1');
// console.log(dateString);


// console.log(date);

// console.log(moment(date, "YYYY/MM/DD").add(1, 'day'))

let a = moment('2018-01-01');
let b = a.clone().add(1, 'day');
a.format('YYYY-MM-DD');
console.log(b)
