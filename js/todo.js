const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

let contentArr = [];

const saveTodo = () => {
  localStorage.setItem("content", JSON.stringify(contentArr));
};

const deleteBtnClick = (event) => {
  const li = event.target.parentNode;

  contentArr = contentArr.filter((item) => item.id !== parseInt(li.id));

  li.remove();
  saveTodo();
};

const updateBtnClick = (event) => {
  const targetInput = event.target.parentNode.firstChild;
  targetInput.disabled = false;
};

const updateDoneBtnClick = (event) => {
  const li = event.target.parentNode;
  const targetInput = li.firstChild;

  contentArr.forEach((item) => {
    if (item.id === parseInt(li.id)) {
      item.text = targetInput.value;
      if (targetInput.value === "") {
        alert(`update fail`);
        location.reload();
        return;
      }
      saveTodo();
    }
  });

  targetInput.disabled = true;
};

const paintTodo = (obj) => {
  const li = document.createElement("li");
  li.id = obj.id;

  const input = document.createElement("input");
  input.value = obj.text;
  input.disabled = true;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = `삭제❌`;
  deleteBtn.addEventListener("click", deleteBtnClick);

  const updateBtn = document.createElement("button");
  updateBtn.innerText = `수정✏️`;
  updateBtn.addEventListener("click", updateBtnClick);

  const updateDoneBtn = document.createElement("button");
  updateDoneBtn.innerText = `수정 완료👌`;
  updateDoneBtn.addEventListener("click", updateDoneBtnClick);

  li.appendChild(input);
  li.appendChild(deleteBtn);
  li.appendChild(updateBtn);
  li.appendChild(updateDoneBtn);

  todoList.appendChild(li);
};

const handleTodoForm = (event) => {
  event.preventDefault();
  const content = todoInput.value;
  todoInput.value = "";
  const contentObj = {
    text: content,
    id: Date.now(),
  };
  contentArr.push(contentObj);

  paintTodo(contentObj);

  saveTodo();
};

todoForm.addEventListener("submit", handleTodoForm);

const savedContent = localStorage.getItem("content");
if (savedContent !== null) {
  const parsedContent = JSON.parse(savedContent);
  contentArr = parsedContent;

  parsedContent.forEach(paintTodo);
}
