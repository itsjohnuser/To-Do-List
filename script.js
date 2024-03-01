function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");
        var taskText = document.createTextNode(taskInput.value);
        li.appendChild(taskText);
        taskList.appendChild(li);

        taskInput.value = "";

        li.onclick = function () {
            this.classList.toggle("completed");
        };
    }
}
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");

        var taskTextSpan = document.createElement("span");
        taskTextSpan.textContent = taskInput.value;
        li.appendChild(taskTextSpan);

        var editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.className = "editBtn";
        editBtn.onclick = function () {
            editTask(this);
        };
        li.appendChild(editBtn);

        var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "deleteBtn";
        deleteBtn.onclick = function () {
            deleteTask(this);
        };
        li.appendChild(deleteBtn);

        taskList.appendChild(li);

        taskInput.value = ""; // Clear input box after adding
    }
}

function deleteTask(btn) {
    var li = btn.parentNode;
    li.remove();
}

function editTask(btn) {
    var li = btn.parentNode;
    var span = li.firstChild;
    var currentText = span.textContent;
    var newText = prompt("Edit the task:", currentText);
    if (newText.trim() !== "") {
        span.textContent = newText;
    }
}
