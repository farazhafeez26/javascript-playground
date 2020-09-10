
var todos = []

function showtodos() {

    document.getElementById("todo-list").innerHTML = ""
    for (var i = 0; i < todos.length; i++) {
        var todo = document.createElement("P")
        todo.innerText = todos[i]
        document.getElementById("todo-list").appendChild(todo)
    }

}
// 1 
form.addEventListener("submit", function (event) {
    event.preventDefault()
    var todoText = document.getElementById("todo-item").value
    todos.push(todoText)
    storeTodos()
    showtodos()
})

//store to-do list on local storage

function storeTodos() {
    //vvvto convert JS object into JSON string  vvv
    window.localStorage.setItem("todos", JSON.stringify(todos))
    var idForTodos = todosId.getAttribute("todos")
    console.log(idForTodos)
}

// check for stored to dos and display them to the user 

function main() {
    //read local storage 
    var localTodos = JSON.parse(window.localStorage.getItem("todos"))
    //if todos are not empty assign them todos array. 
    if (localTodos !== null) {
        todos = localTodos    // question 
    }
    showtodos()
}
main()



// homework - to assign an ID to each to-do item, use data attributes. 
// please refer MDN dataattributes https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes 
// i want to use data attri. to delete each to dos.
// use splice method to delete element from array.  


