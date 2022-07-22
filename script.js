// Задание 1

const newToDo = document.querySelector("#newToDo");
const addToDo = document.querySelector("#AddToDo");
let toDoList = document.querySelector("#toDoList");
const DoneCheckbox = document.querySelector(".DoneCheckbox");



addToDo.addEventListener('click', (e) => {
   if (newToDo.value === "") return
   createAndDeleteElem(newToDo.value);
   newToDo.value = "";
})

function createAndDeleteElem(value) {
   const li = document.createElement('li');
   li.className = "listItem";
   toDoList.appendChild(li);

   const btn = document.createElement('button');
   btn.setAttribute('id', 'removeButton')
   btn.textContent = "Remove";
   li.appendChild(btn);
   btn.addEventListener('click', (e) => {
      toDoList.removeChild(li)
   })

   const divDiv = document.createElement('div');
   li.prepend(divDiv);
   divDiv.textContent = value;

   const inputCheck = document.createElement('input');
   inputCheck.setAttribute('type', 'checkbox');
   inputCheck.className = ''
   divDiv.prepend(inputCheck);

   inputCheck.addEventListener('click', (e) => {
      li.classList.toggle('done')
   })
}


