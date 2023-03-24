// simple function
function sum(num1, num2) {
    return num1 + num2;
  }

  let y = sum(2,3);
  console.log(y);

// no arrow function
let discountPrice = function (price) {
    return price * 0.85;
}

console.log(discountPrice(100));

// arrow function
let d = (p) => {
    return p * 0.85;
}

console.log(d(100));