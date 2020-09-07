// selecting the form element from the DOM
const form = document.getElementById("form");
const inputElement = document.getElementById("todo-item");
const todoList = document.getElementById("todo-list");
var todos = [];

function showtodos() {
  // reset todo list content
  todoList.innerHTML = "";
  // loop through todos and create a p element for each and append it to the todo list
  for (var i = 0; i < todos.length; i++) {
    // create p element
    var todo = document.createElement("P");
    // set the text inside to the corresponding todo
    todo.innerText = todos[i];

    // append it to the todo list

    // todo.style.border = "1px solid blue";
    // todo.style.padding = "0.5rem";
    // todo.style.borderRadius = "6px";

    todo.classList.add("list-group-item");

    var button = document.createElement("button");
    // change button properties programmatically
    button.classList.add("btn");
    button.classList.add("btn-success");
    button.textContent = "Done";

    // button.style.padding = "0.5rem";
    // button.style.margin = "1rem";
    // button.style.color = "white";
    //button.style.backgroundColor = "green";
    // button.style.borderRadius = "6px";
    // button.style.borderColor = "grey";
    // set data atribute to the current index
    button.setAttribute("data-index", i);

    todo.appendChild(button);
    todoList.appendChild(todo);
  }
}

// Attaching a submit event
form.addEventListener("submit", function (event) {
  // prevent page reload on submit
  event.preventDefault();
  // grab text value from input element
  var todoText = inputElement.value;

  //add if   statement to make sure that it is not submitted with no value
  if (todoText === "") {
    return; // if the todo is empty, dont execute further, stop.
  }
  // add value to todos array
  todos.push(todoText);
  // store it to local storage

  //make to do empty after submit
  inputElement.value = "";

  storeTodos();
  // paint it to the screen
  showtodos();
});

//store to-do list on local storage

function storeTodos() {
  window.localStorage.setItem("todos", JSON.stringify(todos));
}

// check for stored to dos and display them to the user

function main() {
  //read local storage
  var localTodos = JSON.parse(window.localStorage.getItem("todos"));
  //if todos are not empty assign them todos array.
  if (localTodos !== null) {
    todos = localTodos;
  }
  showtodos();
}
main();

todoList.addEventListener("click", function (event) {
  // store the event target
  var element = event.target;
  if (element.nodeName === "BUTTON") {
    // get the parent element of the button
    var todosIndex = element.getAttribute("data-index");

    // delete the "done" todo from the todos array
    todos.splice(todosIndex, 1);

    // rewrite the new todos array to local storage
    storeTodos();
    // pain changes to the screen
    showtodos();
  }
});
