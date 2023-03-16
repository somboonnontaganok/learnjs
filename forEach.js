// const numbers = [1, 2, 3, 4 ,5];
// numbers.forEach((index, item) => {
//     console.log(index, item);
// })    

const letters = ['q', 'b', 'c', 'd', 'q', 'b', 'c', 'd']
let count = {};
letters.forEach(item => {
    if (count[item]) {
        count[item]++;
    }
    else {
        count[item] = 1;
    }   
    console.log(count); 
})

// console.log(count);