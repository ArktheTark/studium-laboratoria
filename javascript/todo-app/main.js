const addBtn = document.getElementById("add");
const deleteBtn = document.getElementById("delete");
const newTask = document.querySelector(".task");

addBtn.addEventListener("click", function () {
  console.log("Add button clicked");
  newTask.classList.remove("hidden");
});
deleteBtn.addEventListener("click", function () {
  console.log("Delete button clicked");
});
