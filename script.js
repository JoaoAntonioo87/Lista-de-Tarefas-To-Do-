const listToDo = document.querySelector("#listToDo");
const listCompleted = document.querySelector("#listCompleted");
const btn = document.querySelector("#btnCreate");

btn.addEventListener("click", () => {
  event.preventDefault();

  const task = document.querySelector("#task");
  const newItem = document.createElement("li");

  if (task.value) {
    newItem.innerText = task.value;
    listToDo.appendChild(newItem);
    task.value = "";

    const btnCompleted = document.createElement("button");
    btnCompleted.innerText = "Completar tarefa";
    newItem.appendChild(btnCompleted);

    btnCompleted.addEventListener("click", () => {
      listCompleted.appendChild(newItem);
      newItem.removeChild(btnCompleted);
    });
  }
});
