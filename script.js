const toDoItems = [];
class ToDo {
    constructor(description) {
      this.description = description;
      this.complete = false;
    }
  }
  ToDo.prototype.completeToDo = function() {
    this.complete = true;
  }
  function buildToDo(todo, index) {
    const newDiv = document.createElement('toDoShell');
    newDiv.classList.add('toDoShell');
    const newSpan = document.createElement('toDoText');
    newSpan.innerHTML = todo.description;
    newSpan.id = index;
    newSpan.addEventListener('click', completeToDo);
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.id = index;
    newSpan.removeAttribute('id');
    checkbox.addEventListener('click', completeToDo);
    newSpan.removeEventListener('click', completeToDo);
    checkbox.classList.add('completeCheckbox');
    if (todo.complete) {
      newSpan.classList.add('completeText');
      checkbox.checked = true;
    }
    newDiv.appendChild(checkbox);
    newDiv.appendChild(newSpan);
    return newDiv;
    }

function buildToDos(toDos) {
    return toDos.map(buildToDo);
}

function displayToDos() {
  const toDoContainer = document.querySelector('#toDoContainer');
  toDoContainer.innerHTML = '';
  buildToDos(toDoItems).forEach(function(toDo) {
    toDoContainer.appendChild(toDo);
  });
}

function addToDo() {
    const newToDo = new ToDo(taskInput.value);
    newToDo.value = newToDo;
    toDoItems.push(newToDo);
    newToDo.value = '';
    displayToDos();
  }

  const addButton = document.querySelector('#addButton');
  addButton.addEventListener('click', addToDo);

  function completeToDo(event) {
    // UNCOMMENT THE NEXT LINE
    const index = event.target.id;
    toDoItems[index].completeToDo();
    displayToDos();
  }

  displayToDos();


