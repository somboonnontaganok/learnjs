


const tasks = [
    { id: 1, name: 'Fishing' },
    { id: 2, name: 'Shopping' },
    { id: 3, name: 'Swimming' },
    { id: 4, name: 'Football' }
];

// return 2


let foundIndex
tasks.forEach((element, index) => {
    if(element.id === 3) {
        foundIndex = index
    }
    return foundIndex;
})

// tasks.findIndex(e => e.id === 3)
console.log(`Found ${tasks.length}`);
// console.log("");