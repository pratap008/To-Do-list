const addTaskBtn = document.getElementById('addBtn');
const taskItem = document.getElementById('taskInput');
const listRoot = document.getElementById('taskList');
function addtask(){
    const tasktext = taskItem.value.trim();
    if(tasktext === "")return;
    const delbtn = document.createElement('button');
    delbtn.innerHTML = "X";
    delbtn.addEventListener('click', deletetask);
    function deletetask(){
    const parentitem = delbtn.parentElement;
    parentitem.remove(); 
    }
    const listItem = document.createElement("li");
    listItem.innerText = tasktext;
    listItem.appendChild(delbtn);
    listRoot.appendChild(listItem);
}
addTaskBtn.addEventListener('click', addtask);

