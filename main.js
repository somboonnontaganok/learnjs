// main.js
// import { add } from './module.js';
import { substract } from './toExport.js';
console.log(substract(7, 3)); // Output: 4
document.getElementById("demo").innerHTML = `Substraction is ${substract(6, 3)}`; // Output: