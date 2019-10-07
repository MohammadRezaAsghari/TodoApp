//Taking Saved Data from local Storage
const checkData = function() {
        let todoJson = localStorage.getItem('todos');
        if (todoJson !== null) {
            console.log('returning an array');
            return JSON.parse(todoJson);

        } else {
            console.log('returning []');
            return []
        }
    }
    //Writing data in local Storage
const saveNote = function(todo) {
    localStorage.setItem('todos', JSON.stringify(todo));
}

//remove todo by clicking on buttons
let removeTodo = function(id) {
    const removeIndex = todo.findIndex(function(item) {
        return item.id === id;
    });

    if (removeIndex > -1) {
        todo.splice(removeIndex, 1);
    }
}


//createElement
const createElementDOM = function(item) {
    let div = document.createElement('div');
    let span = document.createElement('span');
    let button = document.createElement('button');

    //creating and attaching eventListener to checkbox
    //EventListner is going to make todo.done true or false
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = item.done;
    checkbox.addEventListener('change', function(e) {
        item.done = e.target.checked;
        saveNote(todo);
        renderTodos(todo, filter);
    });


    //appending checkbox;
    div.appendChild(checkbox);

    //writing content in span
    if (item.body.length > 0) {
        span.textContent = item.body;
    } else {
        span.textContent = 'Unnamed Note'
    }

    //appending span
    div.appendChild(span);

    //appending button and it's value
    div.appendChild(button);
    button.innerHTML = '&times;';
    button.addEventListener('click', function() {
        removeTodo(item.id);
        saveNote(todo);
        renderTodos(todo, filter);
    });




    return div;
}

const generateSummaryDOM = function(leftTodos) {
    let h = document.createElement('h2');
    h.textContent = `You have ${leftTodos.length} todos left`;
    return h;
}

//render todos:

const renderTodos = function(todo, filter) {
    //filter todos based on input value

    let filterToDos = todo.filter(function(item) {
        return item.body.toLowerCase().includes(filter.text.toLowerCase());
    });
    //again filter filterToDos because of checkbox (hide completed)
    filterToDos = filterToDos.filter(function(item) {
        if (filter.hideCompleted) {
            return !item.done;
        } else {
            return true;
        }
    });
    //see how many filtered items are not done
    const leftTodos = filterToDos.filter(function(item) {
        return !item.done
    });
    // each time we must empty the div#todo protecting duplicate contents
    document.querySelector('#todo').innerHTML = '';
    // put in interface the number undone todos

    document.querySelector('#todo').appendChild(generateSummaryDOM(leftTodos));

    //showing the filtered todos on interface
    filterToDos.forEach(function(item) {
        document.querySelector('#todo').appendChild(createElementDOM(item));
    });
}