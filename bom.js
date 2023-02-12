// creating variables
const input = document.querySelector('input');
const addButton = document.querySelector('button');
const chapterList = document.querySelector('ul');

// button event listener
addButton.addEventListener('click', function() {
    // check if input is not empty
    if (input.value != "") {
        // create elements
        const newChapter = document.createElement('li');
        const deleteButton = document.createElement('button');
        // populate elements
        newChapter.textContent = input.value;
        deleteButton.textContent = "❌";
        // append deleteButton to newChapter
        newChapter.appendChild(deleteButton);
        // append newChapter to chapterList
        chapterList.appendChild(newChapter);
        // add eventListener to deleteButton
        deleteButton.addEventListener('click', function() {
            newChapter.remove();
        })
        // set focus to input
        input.focus();
        // set input to null
        input.value = "";
    }

});