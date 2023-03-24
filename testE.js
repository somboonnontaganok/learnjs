// use prototype methods
let Storm = function () {};
Storm.prototype.precip = 'rain';
let WinterStorm = function () {};
WinterStorm.prototype = new Storm();
WinterStorm.prototype.precip = 'snow';
let bob = new WinterStorm();
console.log(bob.precip);