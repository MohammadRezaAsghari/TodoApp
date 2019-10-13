const todoDone = document.querySelector('#todoDone');
const todoBody = document.querySelector('#todoBody');
const removeEl = document.querySelector('#removeItem');
const id = location.hash.substring(1);

console.log(id);

const todos = checkData();
const todo = todos.find(function(item) {
    return item.id === id;
});

if (todo === undefined) {
    location.assign('index.html');

}
console.log(todo);

todoDone.checked = todo.done;
todoBody.value = todo.body;

todoBody.addEventListener('input', function(e) {
    todo.body = e.target.value;
    saveNote(todos);
});
todoDone.addEventListener('change', function(e) {
    todo.done = e.target.checked;
    saveNote(todos);
});
removeEl.addEventListener('click', function() {
    let index = todos.findIndex(function(item) {
        return item.id === id;
    })
    if (index > -1) {
        todos.splice(index, 1);

    } else {
        console.log('index has not been find');
    }
    saveNote(todos);
    location.assign('./index.html');
})