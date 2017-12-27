const fs = require('fs');
const os = require('os');



var today = new Date();
var month = today.getMonth();
var day = today.getDate();
var year = today.getFullYear();
var hours = today.getHours();
var min = today.getMinutes();
var sec = today.getSeconds();

const m = [
  'January',
  'Februar',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const myCPU = os.cpus();
const myNetwork = os.networkInterfaces();

var logs = m[month] + ' ' + day + ', ' + year + ' ' + hours + ':' + min + ':' + sec + '\n\r' +
                   myCPU[0].model + '\n\r' +
                   myNetwork["Wi-Fi"][1].address;


fs.appendFileSync('logs.txt',logs);
