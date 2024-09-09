document.addEventListener('DOMContentLoaded', function() {
    const addTaskButton = document.getElementById('add-task');
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', function() {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            newTaskInput.value = '';
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit');
        editButton.addEventListener('click', function() {
            const newTaskText = prompt('Edit task:', taskText);
            if (newTaskText !== null && newTaskText.trim() !== '') {
                li.firstChild.textContent = newTaskText.trim();
            }
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        const markButton = document.createElement('button');
        markButton.textContent = 'Mark';
        markButton.classList.add('mark');
        markButton.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        li.appendChild(editButton);
        li.appendChild(deleteButton);
        li.appendChild(markButton);
        taskList.appendChild(li);
    }
});
