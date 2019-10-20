let todo = checkData();
//-------filter object---save the latest change in input type text
let filter = {
    text: '',
    hideCompleted: false
}

//-------rendertodos function--rendering todos based on users input value

renderTodos(todo, filter);



// Event listeners

document.querySelector('#search').addEventListener('input', function(event) {
    filter.text = event.target.value;
    renderTodos(todo, filter);
});

document.querySelector('#todoForm').addEventListener('submit', function(e) {
    let identifier = uuidv4();
    e.preventDefault();
    todo.push({
        id: identifier,
        body: e.target.elements.firstName.value,
        done: false
    })
    saveNote(todo);
    e.target.elements.firstName.value = '';
    location.assign(`/edit.html#${identifier}`);
});
document.querySelector('#hideCompleted').addEventListener('change', function(e) {
    filter.hideCompleted = e.target.checked;
    renderTodos(todo, filter);
});

//-------synching all data
//this EventListener Is fireing Up just by other documents like: edit.js
window.addEventListener('storage', function(e) {
    this.console.log(e);

    if (e.key === 'todos') {
        todo = JSON.parse(e.newValue);
        renderTodos(todo, filter);
    }
});


// JavaScriot Dates

let now = new Date();
console.log(typeof now);
console.log(now.getTime());