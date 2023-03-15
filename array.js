const numbers = [1,2,3,1,4,5,6];
  numbers.splice(1,0,'apple',7); //[ 1, 'apple', 7, 2, 3, 4, 5, 6 ]
  numbers.splice(1,2); //[ 1, 2, 3, 4, 5, 6 ]

//   numbers.length = []; //[]
console.log(numbers);
// console.log(numbers.indexOf(1));
// console.log(numbers.lastIndexOf(1));
console.log(numbers.indexOf('apple') !== -1);
console.log(numbers.includes(1));
console.log(numbers.indexOf(1,3)); //find number 1 start from index[3]