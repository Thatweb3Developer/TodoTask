const tasks = [];
const addTask = document.getElementById('addTask');

addTask.addEventListener('click', () => {
     const todoInput = document.getElementById('todo-input');
    const taskValue = todoInput.value.trim();
    if (taskValue !== '') {
        tasks.push(taskValue);
        todoInput.value = '';
        displayTasks();
    }
})
// function addTask() {
   
// }

function displayTasks() {
    const listElement = document.getElementById('taskList');

    // Clear previous content
    listElement.innerHTML = '';

    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'task-item';

        const actionButtons = document.createElement('div');
        actionButtons.innerHTML = `
            <button onclick="deleteTask(${index})"><i class="fas fa-trash  deleteBtn"></i> </button>
            <button onclick="updateTask(${index})"><i class="fas fa-edit editBtn"></i></button>`;

        const taskContent = document.createElement('span');
        taskContent.textContent = task;
        listItem.appendChild(taskContent);
        listItem.appendChild(actionButtons);
        listElement.appendChild(listItem);
    });
}

function deleteTask(index) {
    const taskToDelete = tasks[index];
    const promptReply = prompt('Do you want to delete "' + taskToDelete + '"?\nEnter "Yes" or "No"');

    if (promptReply && promptReply.toLowerCase() === 'yes') {
        tasks.splice(index, 1);
        displayTasks();
    } else {
        alert('Task deletion canceled.');
    }
}

function updateTask(index) {
    const updatedTask = prompt('Update task:', tasks[index]);
    if (updatedTask !== null) {
        tasks[index] = updatedTask.trim();
        displayTasks();
    }
}

// Initial render
displayTasks();