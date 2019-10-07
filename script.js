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
    e.preventDefault();
    console.log(e);
    todo.push({
        id: uuidv4(),
        body: e.target.elements.firstName.value,
        done: false
    })
    saveNote(todo);
    e.target.elements.firstName.value = '';
    renderTodos(todo, filter);
});
document.querySelector('#hideCompleted').addEventListener('change', function(e) {
    filter.hideCompleted = e.target.checked;
    renderTodos(todo, filter);
})