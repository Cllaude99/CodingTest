const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, ...arr] = input;
const table = arr
  .map((element) => element.split(' ').map(Number))
  .sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });

let meetingNumber = 0;
let endTime = 0;

table.forEach((element) => {
  if (element[0] >= endTime) {
    meetingNumber += 1;
    endTime = element[1];
  }
});

console.log(meetingNumber);
