let form = document.querySelector("#form");
let button = document.querySelector(".delete-todo-button");
let ul = document.querySelector(".todos")


let todoItem = {}
let todo = []

form.addEventListener("submit", (event) => {
    event.preventDefault();
    // console.log(event.target.todoName.value);
    todoItem = {
        id: Date.now(),
        todoValue: event.target.todoName.value
    }

    if (event.target.todoName.value === '') {
        alert("Please Enter Your Todo")
    }else {

        todo.push(todoItem)
    
    
        localStorage.setItem("todoList", JSON.stringify(todo))
        
        
    
        location.href = `${window.origin}/Todolist/`
    }
});


if (localStorage.length > 0) {
    let todoData = [...JSON.parse(localStorage.getItem("todoList"))]
    todo = [...todoData]

}

todo.forEach((todos) => {
    ul.innerHTML +=`<li class="todo " >
        <span class="todo-title"> ${todos.todoValue}</span>
        <div class="toggle-delete">
          <input type="checkbox" name="complated" class="todo-checked">
          <button class="delete-todo-button" id='${todos.id}' >X</button>
        </div>
      </li>
      `

      let ulButtons = ul.querySelectorAll("li .toggle-delete .delete-todo-button");



      Array.from(ulButtons).forEach((buttons) => {
        buttons.addEventListener("click", (event) => {
            
            let id = (Number(event.target.getAttribute("id")))
            // console.log(event.target);
            let deleteTodo = todo.filter((todos) =>  todos.id !== id)

            // localStorage.removeItem("todoList", helo)

            todo = [...deleteTodo]

            
            localStorage.setItem("todoList", JSON.stringify(todo))
            
            location.href = location.href = `${window.origin}/Todolist/`; 
            
        });
    });


    let ulcheckBox = ul.querySelectorAll("li .toggle-delete .todo-checked");
    
    Array.from(ulcheckBox).forEach((check, index) => {
        console.log(check.name);
        check.addEventListener("click", () => {
            if (check.checked) {
                ul.querySelectorAll("li")[index].classList.add("completed")
            }else {
                ul.querySelectorAll("li")[index].classList.remove("completed")
            }
        })

    });
    
});











