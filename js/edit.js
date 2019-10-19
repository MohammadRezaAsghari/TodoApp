const todoDone = document.querySelector('#todoDone');
const todoBody = document.querySelector('#todoBody');
const removeEl = document.querySelector('#removeItem');
const id = location.hash.substring(1);

console.log(id);

let todos = checkData();
let todo = todos.find(function(item) {
    return item.id === id;
});

if (todo === undefined) {
    location.assign('index.html');

}

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

//window and syncing all data across all tabs

window.addEventListener('storage', function(e) {
    if (e.key === 'todos') {

        todos = JSON.parse(e.newValue);
        todo = todos.find(function(item) {
            return item.id === id;
        });

        if (todo === undefined) {
            location.assign('index.html');

        }
        todoDone.checked = todo.done;
        todoBody.value = todo.body;
    }
})