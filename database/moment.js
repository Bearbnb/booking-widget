const moment = require('moment');
// moment().format('YYYY MM DD');

// let date = new Date ('2017/12/31');
// let dateString = moment(date).add(1, 'add').format('1');
// console.log(dateString);


// console.log(date);

// console.log(moment(date, "YYYY/MM/DD").add(1, 'day'))

let a = moment('2018-01-01');
let b = a.clone().add(1, 'day');
// a.format();
console.log(b.format('YYYY-MM-DD'))

// console.log(moment('2018-01-01').add(1, 'day').format('YYYY-MM-DD'))

// let array = [];
//
// for (let i = 0; i < 365; i++) {
//   array.push(moment('2018-01-01').add(i, 'day').format('YYYY-MM-DD'))
// }
//
// console.log(array);

let data = [];

for (let i = 1; i < 100; i++) {
  // const array = [];
  for (let j = 0; j < 365; j++) {
    data.push([
      i,
      moment('2018-01-01').add(j, 'day').format('YYYY-MM-DD'),
      Math.random(),
      Math.random() * 560,
    ]);
  }
}

console.log(data)
