// Select elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Load tasks from local storage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to render tasks
function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${task}
            <span class="edit" onclick="editTask(${index})">✏️</span>
            <span class="delete" onclick="deleteTask(${index})">❌</span>
        `;
        taskList.appendChild(li);
    });
}

// Add task
addTaskButton.addEventListener('click', () => {
    const task = taskInput.value.trim();
    if (task !== '') {
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        taskInput.value = '';
        renderTasks();
    }
});

// Delete task
function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

// Edit task
function editTask(index) {
    const newTask = prompt('Edit Task:', tasks[index]);
    if (newTask !== null) {
        tasks[index] = newTask;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
    }
}

// Initial render
renderTasks();
