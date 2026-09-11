let tasksData = {} ///creating local database so that it remain save activity even after refresh.
const todo=document.querySelector('#todo');
const progress=document.querySelector('#progress');
const done=document.querySelector('#done');
const columns = [todo,progress,done];

let dragElement=null;

//creating function for the adding new task element

function addTask(title,desc,column){

    const div = document.createElement("div")
    div.classList.add("task");
    div.setAttribute("draggable","true") // Add the "task" class so it picks up your CSS styling
    
    div.innerHTML = `
        <h2>${title}</h2>
        <p>${desc}</p>
        <button>Delete</button>
    `
    column.appendChild(div)

    div.addEventListener("drag",(e) => {
        dragElement = div;
    })

    const deleteButton = div.querySelector("button");
    deleteButton.addEventListener("click",() => {
        div.remove();
        updateTaskCount();
    })

    return div;
}

function updateTaskCount(){
    columns.forEach(col =>{
        const tasks =  col.querySelectorAll(".task");
        const count = col.querySelector(".right");

        // creating local database
        tasksData[col.id] = Array.from(tasks).map(t => {
            return {    
                title: t.querySelector("h2").innerText,
                desc: t.querySelector("p").innerText
            }
        })

        localStorage.setItem("tasks",JSON.stringify(tasksData));
        count.innerText = tasks.length;
    })
}

// storing activity even after refresh
if(localStorage.getItem("tasks")){
    const data = JSON.parse(localStorage.getItem("tasks"));
    // JSON.parse => used to extract stringfy data stored in local dataBase into Object form

    for(const col in data){
        const column = document.querySelector(`#${col}`);
        data[col].forEach(task => {
            
            addTask(task.title,task.desc,column);
        })
    }

    updateTaskCount();
}

const tasks=document.querySelectorAll('.task');

tasks.forEach(task => {
    task.addEventListener("drag",(e)=>{
        //console.log("dragging",e);
        dragElement=task;

    })
});

function addDragEventsOnColumn(column){
    column.addEventListener("dragenter",(e)=>{
        e.preventDefault(); 
        column.classList.add("hover-over");
    })
    column.addEventListener("dragleave",(e)=>{
        e.preventDefault();
        column.classList.remove("hover-over");
    })
    column.addEventListener("dragover",(e)=>{
        e.preventDefault();
    })
    column.addEventListener("drop",(e)=>{
        e.preventDefault();
        
        column.appendChild(dragElement);
        column.classList.remove("hover-over");

        updateTaskCount();

        // count button logic 
        columns.forEach(col =>{
            const tasks =  col.querySelectorAll(".task");
            const count = col.querySelector(".right");

            count.innerText = tasks.length;
        })
        
    })
}

addDragEventsOnColumn(todo);
addDragEventsOnColumn(progress);
addDragEventsOnColumn(done);

// Modal related logic
const toggleModalButton = document.querySelector('#toggle-modal');
const modalBg = document.querySelector(".modal .bg")
const modal = document.querySelector(".modal")
const addTaskButton = document.querySelector('#add-new-task');

toggleModalButton.addEventListener("click",()=>{
    modal.classList.toggle("active")
})
modalBg.addEventListener("click",() =>{
    modal.classList.remove("active")
})

addTaskButton.addEventListener("click",()=>{
    const taskTitle = document.querySelector('#task-tittle-input').value
    const taskDesc = document.querySelector('#task-desc-input').value

    addTask(taskTitle,taskDesc,todo);
    updateTaskCount(); // count button logic when new task is added .
    
    modal.classList.remove("active")

    document.querySelector('#task-tittle-input').value = "";
    document.querySelector('#task-desc-input').value = "";
})