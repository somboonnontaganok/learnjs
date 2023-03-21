// console.log('test');
const readingList = document.querySelectorAll('#reading-list li .name');
// console.log(readingList);
readingList.forEach(function(list) {
    // console.log(list.textContent);
    list.textContent += ' | book title: '; //add to every book list
});