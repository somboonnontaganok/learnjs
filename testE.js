/* // use prototype methods
let Storm = function () {};
Storm.prototype.precip = 'rain';
let WinterStorm = function () {};
WinterStorm.prototype = new Storm();
WinterStorm.prototype.precip = 'snow';
let bob = new WinterStorm();
console.log(bob.precip); */

/* // console.log(result);
let d = new Date;
let hour = d.getHours();
let minute = d.getMinutes();
let second = d.getSeconds();
// console.log(`${hour}:${minute}:${second}`);
let y = hour + ':' + minute + ':'+ second; */


