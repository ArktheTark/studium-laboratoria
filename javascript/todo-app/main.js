const addBtn = document.getElementById("add");
const deleteBtn = document.getElementById("delete");
const newTask = document.querySelector(".task");
const createTask = document.getElementById("create-task");
const mainCont = document.getElementById("main-cont");
let counter = 0;

addBtn.addEventListener("click", function () {
  console.log("Add button clicked");
  newTask.classList.remove("hidden");
  document.querySelector(".todo").classList.add("hidden");
});
deleteBtn.addEventListener("click", function () {
  console.log("Delete button clicked");
});

createTask.addEventListener("click", function () {
  console.log("create task button clicked");
  newTask.classList.add("hidden");
  counter += 1;
  const taskName = document.getElementById("name").value;
  const taskBody = document.getElementById("Description").value;
  const taskTemplate = `
    <div class="todo" id="task-${counter}">
      <input name="selected" id="${counter}" type="radio">
      <h3>${taskName}</h3>
      <p>${taskBody}</p>
    </div>
  `;
  mainCont.insertAdjacentHTML("beforeend", taskTemplate);
  document.querySelector(".todo").classList.remove("hidden");
});

deleteBtn.addEventListener("click", function () {
  const radios = document.querySelectorAll("[type='radio']");
  radios.forEach(function (radio) {
    if (radio.checked) {
      console.log("checked");
      radio.parentElement.remove();
    }
  });
});
