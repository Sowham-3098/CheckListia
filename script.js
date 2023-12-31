const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask() {
  if (inputBox.value === '') {
    alert("Please write your task first!");
  } else {
    let li = document.createElement("li");

    li.innerHTML = inputBox.value;

    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');
}
const darkModeButton = document.getElementById('dark-mode-button');
darkModeButton.addEventListener('click', toggleDarkMode);

listContainer.addEventListener("click", function (e) {
  // console.log(e.target.tagName);
  if (e.target.tagName === "LI") {

    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showList() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showList();

