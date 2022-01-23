const todos = [];

const pendingClasses =
  "bg-gray-100 w-2/3 capitalize text-center text-red-400 text-2xl font-semibold rounded py-3 transition transform ease-in-out duration-300 hover:bg-red-600 hover:text-gray-200 hover:scale-110  cursor-pointer";
const completedClasses =
  "bg-gray-100 w-2/3 capitalize text-center text-green-500 text-2xl font-semibold rounded py-3 transition transform ease-in-out duration-300 hover:bg-green-400 hover:text-gray-200 hover:scale-110  cursor-pointer";

const pendingList = document.getElementById("pendingList");
const completedList = document.getElementById("completedList");

const showTodos = () => {
  const pendingTodos = todos.filter((todo) => todo.status === "pending");

  pendingList.innerHTML = "";
  pendingTodos.forEach((todo) => {
    const pendingItem = document.createElement("li");
    pendingItem.className = pendingClasses;
    pendingItem.innerText = todo.text;
    pendingItem.id = todo.id;
    pendingList.appendChild(pendingItem);
  });

  const completedTodos = todos.filter((todo) => todo.status === "done");

  completedList.innerHTML = "";
  completedTodos.forEach((todo) => {
    const completedItem = document.createElement("li");
    completedItem.className = completedClasses;
    completedItem.innerText = todo.text;
    completedItem.id = todo.id;
    completedList.appendChild(completedItem);
  });
};

const addForm = document.getElementById("addForm");
const newTodo = document.getElementById("newTodo");

addForm.addEventListener("submit", (event) => {
  event.preventDefault();
  todos.push({
    id: Math.floor(Math.random() * 100000).toString(),
    text: newTodo.value,
    status: "pending",
  });
  newTodo.value = "";
  showTodos();
});

pendingList.addEventListener("click", (event) => {
  todos.find((todo) => todo.id === event.target.id).status = "done";
  showTodos();
});

completedList.addEventListener("click", (event) => {
  todos.find((todo) => todo.id === event.target.id).status = "pending";
  showTodos();
});
