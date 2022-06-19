const todoForm=document.getElementById("todo-form");
const todoInput =todoForm.querySelector("input");
const todoList=document.getElementById("todo-list");

let toDos = [];
const TODOS_KEY="toDos";

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    toDos = toDos.filter(toDos => toDos.id !==parseInt(li.id));
    saveToDos();
    li.remove();
}

function paintTodo(newToDoObj){
    const li = document.createElement("li");
    li.id = newToDoObj.id;
    const span = document.createElement("span");
    span.id="todo-span"
    span.innerText=newToDoObj.text;
    const button = document.createElement("button");
    button.innerText="X";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleSubmit(event){
    event.preventDefault();
    const newTodo= todoInput.value;
    todoInput.value="";
    const newToDoObj = {
        "id" : Date.now(),
        "text" : newTodo 
    }
    toDos.push(newToDoObj);
    paintTodo(newToDoObj);
    saveToDos();
}

todoForm.addEventListener("submit", handleSubmit);

const getToDos = localStorage.getItem(TODOS_KEY);

if(getToDos !== null){
    const parseToDos = JSON.parse(getToDos);
    toDos=parseToDos;
    parseToDos.forEach(paintTodo);
}