let showTaskAdd = document.getElementById("showTaskAdd");
let addedTaskContainer = document.getElementById("addedTaskContainer");
let taskData = document.getElementById("taskData");
let taskTime = document.getElementById("taskTime");
let body = document.getElementById("bod");





let todos = [];

// to show the task adding card
function showTaskInfo() {
  showTaskAdd.classList.toggle("d-none");
}

function closeTaskInfo() {
  showTaskAdd.classList.add("d-none");
}


// function to push task and taskTime as objects in an array
function addTask() {
  let date = new Date(taskTime.value);
  let options = { weekday: "long", month: "long", day: "numeric" };
  let fDate = date.toLocaleDateString("en", options);

  let tempTodo = {
    task: taskData.value,
    dueDate: fDate,
  };

  todos.push(tempTodo);
  console.log(todos);
  taskTime.value = "";
  taskData.value = "";
  showTaskInfo();
  body.style.backgroundImage = "none";
  showAddedTask();
  // testingCSS();

}



// showing the added tasks
function showAddedTask() {

    addedTaskContainer.innerHTML=""



  todos.map((todo, n)=>{
    // 1st child div of the addedTaskContainer section
  let firstChildDiv = document.createElement("div");
  addedTaskContainer.appendChild(firstChildDiv);

  // taskCompleted(e);

  // 2nd div with the class name = "taskNumber"
  let taskHead = document.createElement("div");
  taskHead.classList.add("taskNumber");
  firstChildDiv.appendChild(taskHead);

  // this shows the task number
  let taskIndex = document.createElement("label");
  taskIndex.innerText = "Task " + (n+1);
  taskHead.appendChild(taskIndex);

  // this contains the edit and the delete svgs and texts
  let taskChanges = document.createElement("div");
  taskChanges.classList.add("changes");
  taskHead.appendChild(taskChanges);

  // contains the edit svg and the "Edit" String
  let editDiv = document.createElement("div");
  editDiv.classList.add("editDelete");
  taskChanges.appendChild(editDiv);
  
  // to edit a task
  editDiv.addEventListener('click', function(){
    newTaskDetails = prompt("Enter New Task");
    // console.log(newTaskDetails);
     
    todos[n].task = newTaskDetails;

    taskDeet.innerText = todos[n].task;
  })




  // creating the edit svg
  let editSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  editSVG.setAttribute("viewBox", "0 0 16 16");
  editSVG.innerHTML =
    '<path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>';
  editDiv.appendChild(editSVG);

  // creating the br tag
  let brk1 = document.createElement("br");
  editDiv.appendChild(brk1);

  // creating the "Edit" term
  let editText = document.createElement("span");
  editText.innerText = "Edit";
  editDiv.appendChild(editText);

  // contains the delete svg and the "Delete" String
  let deleteDiv = document.createElement("div");
  deleteDiv.classList.add("editDelete");
  taskChanges.appendChild(deleteDiv);

  // to delete the task
  deleteDiv.addEventListener('click', function(){
    addedTaskContainer.removeChild(firstChildDiv);

    // to remove from the array
    todos.splice(n,1);

    updateTaskIndices();
  })

  // creating the delete svg
  let deleteSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  deleteSVG.setAttribute("viewBox", "0 0 16 16");
  deleteSVG.innerHTML =
    '<path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>';
  deleteDiv.appendChild(deleteSVG);

  // creating the br tag
  let brk2 = document.createElement("br");
  deleteDiv.appendChild(brk2);

  // creating the "delete" term
  let deleteText = document.createElement("span");
  deleteText.innerText = "Delete";
  deleteDiv.appendChild(deleteText);

  // creating the hr tag
  let horizontal = document.createElement("hr");
  firstChildDiv.appendChild(horizontal);

  // creating the div for the task details
  let taskDeet = document.createElement("div");
  taskDeet.classList.add("taskDetails");
  taskDeet.innerText = todo.task;
  firstChildDiv.appendChild(taskDeet);

  // creating the div for the task's time
  let taskTimeTaken = document.createElement("div");
  taskTimeTaken.classList.add("taskSetTime");
  taskTimeTaken.innerText = todo.dueDate;
  firstChildDiv.appendChild(taskTimeTaken);
  
  // creating button div
  let buttonDiv = document.createElement("div");
  buttonDiv.classList.add("button-container");
  firstChildDiv.appendChild(buttonDiv);

  // creating button
  let btn = document.createElement("button");
  btn.innerText = "Comleted the task?"
  btn.classList.add("btn")
  buttonDiv.appendChild(btn);

  btn.addEventListener('click', taskCompleted);


})



}



// this a function to update the task numbers automatically

function updateTaskIndices(){
  let taskNumberDivs = document.querySelectorAll(".taskNumber");
  taskNumberDivs.forEach((taskNumberDiv, index)=>{
    let toUpdateIndex = taskNumberDiv.querySelector('label');
    toUpdateIndex.innerText = "Task" + (index+1) 
  }) 
}


function taskCompleted(e){
  
  let completedButton = e.target;
  let parentFirstChildDiv = completedButton.parentElement.parentElement;
  parentFirstChildDiv.classList.add("completed");
  completedButton.style.backgroundColor = "lightgray";
  completedButton.innerText = "Task Completed!!!";
}