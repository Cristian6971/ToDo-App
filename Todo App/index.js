const addTaskInput = document.querySelector("#add-task");
const addButton = document.querySelector(".add-button");
const todoList = document.querySelector(".todo-list");

// Funcția de adăugare a unui task nou
function addTask(event) {
    event.preventDefault(); // Previne reîncărcarea paginii

    const taskText = addTaskInput.value.trim(); // Obține textul și elimină spațiile goale

    if (taskText === "") return; // Dacă e gol, nu face nimic

    // Creăm un nou <li> cu structura unui task
    const newTask = document.createElement("li");
    newTask.classList.add("todo");
    newTask.innerHTML = `
        <input type="checkbox" id="task-${Date.now()}" />
        <label class="custom-checkbox" for="task-${Date.now()}">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
            </svg>
        </label>
        <label class="todo-text">${taskText}</label>
        <button class="delete-button">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
            </svg>
        </button>
    `;

    // Adăugăm noul task în lista ToDo
    todoList.appendChild(newTask);

    // Golește inputul după adăugare
    addTaskInput.value = "";

    // Adaugă funcționalitate de ștergere pentru noul buton
    const deleteButton = newTask.querySelector(".delete-button");
    deleteButton.addEventListener("click", () => newTask.remove());
}

// Adaugă event listener pentru butonul "Add"
addButton.addEventListener("click", addTask);
