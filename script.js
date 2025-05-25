const todoInput = document.getElementById("todo-input");
const addTaskButton = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list")

// A array to store the task so that I can acces it easily
let tasks = [];

addTaskButton.addEventListener('click', () => {
    const taskText = todoInput.value.trim();
    if(taskText === "") return;
    const newTask = {
        id:Date.now(),
        text: taskText,
        completed: false,
    };
    tasks.push(newTask);
    todoInput.value = ""; // This will clear the input so that can add new task again
    console.log(tasks);
});
