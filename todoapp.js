const todos = [];

const get = (elements) =>
  elements.map((element) => document.getElementById(element));

const [pendingList, completedList, addForm, newTodo] = get([
  "pendingList",
  "completedList",
  "addForm",
  "newTodo",
]);

const newList = [
  {
    element: pendingList,
    status: "pending",
  },
  {
    element: completedList,
    status: "done",
  },
];

const cssClasses = {
  pending:
    "bg-green w-6/12 text-center text-red-500 font-bold rounded py-2 border-8 border-dotted border-gray-500 transition transform ease-in-out duration-300 hover:bg-green-500 hover:text-white hover:scale-110 cursor-pointer",
  done: "bg-gray w-6/12 text-center text-green-800 font-bold rounded py-2 border-8 border-dotted border-gray-500 transition transform ease-in-out duration-300 hover:bg-red-600 hover:text-white hover:scale-110 cursor-pointer",
};

const updateTodos = () => {
  newList.forEach((list) => {
    const filteredTodos = todos.filter((todo) => todo.status === list.status);

    list.element.innerHTML = "";
    filteredTodos.forEach((todo) => {
      const item = document.createElement("li");
      item.className = cssClasses[list.status];
      item.innerText = todo.text;
      item.id = todo.id;
      list.element.appendChild(item);
    });
  });
};

// const addForm = document.getElementById("addForm");
// const newTodo = document.getElementById("newTodo");

addForm.addEventListener("submit", (event) => {
  event.preventDefault();
  todos.push({
    id: Math.floor(Math.random() * 100000).toString(),
    text: newTodo.value,
    status: "pending",
  });
  newTodo.value = "";
  updateTodos();
});

pendingList.addEventListener("click", (event) => {
  todos.find((todo) => todo.id === event.target.id).status = "done";
  updateTodos();
});

completedList.addEventListener("click", (event) => {
  todos.find((todo) => todo.id === event.target.id).status = "pending";
  updateTodos();
});
