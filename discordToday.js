// age  > 20

const array = [
    { name: 'Benji', age: 30 },
    { name: 'Nas', age: 20 },
    { name: 'Sayo', age: 22 },
    { name: 'Sapari', age: 16 },
    { name: 'Storm', age: 27 }
  ];
  
  // ForEach(element, index, array)
  // array.forEach((element,index) => console.log(element));
  
  function filter (arr) {
    const newArray = [];
    arr.forEach(element => {
      if (element.age > 20) {
        newArray.push(element)
      }
    });
    return newArray;
  }

const filter1 = arr => arr.filter(array => array.age > 20)
let x = filter(array);
console.log(x);
let y = filter1(array);
console.log(y);