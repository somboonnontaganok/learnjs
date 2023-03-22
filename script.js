const list = document.querySelector('#reading-list ul');
list.addEventListener('click',function(e){
    if (e.target.className == 'delete'){
        const li =e.target.parentElement;
        list.removeChild(li);
    }
})   

// //Interacting with Form -- add readinglist
const addForm = document.forms['add-list'];
addForm.addEventListener('submit',function(e){
    e.preventDefault(); // prevent from refresh
    const value = addForm.querySelector('input[type="text"]').value; //add new reading list in the text box
//    console.log(value);

// //create element
const li = document.createElement('li');
const ReadingListName = document.createElement('span');
const deleteBtn = document.createElement('span');

// //add content
deleteBtn.textContent = 'delete';
// console.log(deleteBtn.textContent);
ReadingListName.textContent = value; 
// console.log(ReadingListName.textContent);

// //add classes
ReadingListName.classList.add('name');

deleteBtn.classList.add('delete');

// //append to DOM
li.appendChild(ReadingListName);
// console.log(li.appendChild(ReadingListName));
li.appendChild(deleteBtn);
list.appendChild(li); //create but not context 
// console.log(list.appendChild(li));
});