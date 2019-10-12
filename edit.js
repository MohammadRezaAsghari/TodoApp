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