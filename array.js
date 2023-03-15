const first = [1,2,3];
const second = [4,5,6]
const combine = [...first, ...second];
console.log(combine);
const slice = combine.slice(2,4);
console.log(slice);

const numbers = [3,2,1];
numbers.sort();
console.log(numbers);
numbers.reverse();
console.log(numbers);