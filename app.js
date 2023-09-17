let showTaskAdd = document.getElementById("showTaskAdd");
let addedTaskContainer = document.getElementById("addedTaskContainer");






// to show the task adding card
function showTaskInfo(){
    // if(showTaskAdd.classList.contains("d-none")){
    //     showTaskAdd.classList.remove("d-none");
    // }
    // else{
    //     showTaskAdd.classList.add("d-none");
    // }
    showTaskAdd.classList.toggle("d-none");
}

function closeTaskInfo(){
    // console.log("Function is working");
    showTaskAdd.classList.add("d-none");
    // test.innerText = "Changed";
}

function addTask(){
    addedTaskContainer.style.backgroundImage = "none";
}