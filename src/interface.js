import {project_list, project, todo_item} from "./application.js"
import { projects } from "./index.js"

const projectDisplay = document.querySelector(".projectlist");
const centerDisplay = document.querySelector(".center-content");
const newTaskButton = document.querySelector(".taskbutton");

newTaskButton.addEventListener("click", function(e) {
    clearCenterDisplay();
    showNewTaskPrompt();
});

function createProject(proj) {
    let projectDiv = document.createElement("div");
    projectDiv.textContent = proj.title;
    projectDiv.setAttribute("class","proj");
    let projectButton = document.createElement("button");
    projectButton.setAttribute("class","projectbutton");
    projectButton.textContent = "view";
    projectButton.addEventListener("click", function(e) {
        clearCenterDisplay();
        showProjectInfo(proj);
    });
    projectDiv.appendChild(projectButton);
    projectDisplay.appendChild(projectDiv);
}

function clearCenterDisplay() {
    while(centerDisplay.firstChild) {
        centerDisplay.removeChild(centerDisplay.firstChild);
    }
}

function showProjectInfo(proj) {
    const itemList = proj.todo_items;
    let item = 0;
    const itemDisplay = document.createElement("div");
    itemDisplay.setAttribute("class", "itemdisplay");
    for(let i = 0; i < itemList.length; i++) {
        item = document.createElement("div");
        item.setAttribute("class", "item");
        item.textContent = itemList[i].title + " - " + itemList[i].description;
        item.addEventListener("click", function(e) {
            clearCenterDisplay();
            showTaskInfo(itemList[i]);
        });
        itemDisplay.appendChild(item);
    }
    centerDisplay.appendChild(itemDisplay);
}

function showNewTaskPrompt() {
    const itemDisplay = document.createElement("div");
    itemDisplay.setAttribute("class", "itemdisplay");

    const form = document.createElement("form");
    form.setAttribute("name", "taskform");

    const block1 = document.createElement("div");
    const block2 = document.createElement("div");
    const block3 = document.createElement("div");
    const block4 = document.createElement("div");
    const block5 = document.createElement("div");
    const projblock = document.createElement("div");
    const submitButton = document.createElement("button");
    

    block1.setAttribute("class","input-block");
    block2.setAttribute("class","input-block");
    block3.setAttribute("class","input-block");
    block4.setAttribute("class","input-block");
    block5.setAttribute("class","input-block");
    projblock.setAttribute("class","input-block");
    submitButton.setAttribute("class","submitbutton");
    submitButton.setAttribute("type","submit");
    submitButton.textContent = "Create Task";
    submitButton.addEventListener("click", function(event) {
        event.preventDefault();
        let newTask = new FormData(form);
        storeFormData(newTask);

    });

    const titleLabel = document.createElement("label");
    const titleInput = document.createElement("input");
    const descriptionLabel = document.createElement("label");
    const descriptionInput = document.createElement("input");
    const dateLabel = document.createElement("label");
    const dateInput = document.createElement("input");
    const priorityLabel = document.createElement("label");
    const priorityInput = document.createElement("input");
    const notesLabel = document.createElement("label");
    const notesInput = document.createElement("input");
    const projLabel = document.createElement("label");
    const projInput = document.createElement("input");

    titleLabel.setAttribute("for","title");
    titleLabel.textContent = "title: "
    titleInput.setAttribute("type","text");
    titleInput.setAttribute("name","title");
    descriptionLabel.setAttribute("for","description");
    descriptionLabel.textContent = "description: "
    descriptionInput.setAttribute("type","text");
    descriptionInput.setAttribute("name","description");
    dateLabel.setAttribute("for","date");
    dateLabel.textContent = "date: "
    dateInput.setAttribute("type","text");
    dateInput.setAttribute("name","date");
    priorityLabel.setAttribute("for","priority");
    priorityLabel.textContent = "priority: "
    priorityInput.setAttribute("type","text");
    priorityInput.setAttribute("name","priority");
    notesLabel.setAttribute("for","notes");
    notesLabel.textContent = "notes: "
    notesInput.setAttribute("type","text");
    notesInput.setAttribute("name","notes");
    projLabel.setAttribute("for","project");
    projLabel.textContent = "project: "
    projInput.setAttribute("type","text");
    projInput.setAttribute("name","project");

    block1.appendChild(titleLabel);
    block1.appendChild(titleInput);
    block2.appendChild(descriptionLabel);
    block2.appendChild(descriptionInput);
    block3.appendChild(dateLabel);
    block3.appendChild(dateInput);
    block4.appendChild(priorityLabel);
    block4.appendChild(priorityInput);
    block5.appendChild(notesLabel);
    block5.appendChild(notesInput);
    projblock.appendChild(projLabel);
    projblock.appendChild(projInput);
    form.appendChild(block1);
    form.appendChild(block2);
    form.appendChild(block3);
    form.appendChild(block4);
    form.appendChild(block5);
    form.appendChild(projblock);
    form.appendChild(submitButton);
    itemDisplay.appendChild(form);
    centerDisplay.appendChild(itemDisplay);
}

function storeFormData(form) {
    //organizes the data from the form into variables, and creates a new todo item and assigns it to a project
    const todoInfo = [];
    let i = 0;
    for (let pair of form.entries()) {
        todoInfo[i] = pair[1];
        i++;
    }
    console.log(todoInfo[0]);
    const proj = projects.findProject(todoInfo[5]);
    proj.addTodo(new todo_item(todoInfo[0],todoInfo[1],todoInfo[2],todoInfo[3],todoInfo[4],todoInfo[5]));
    clearCenterDisplay();
    showProjectInfo(proj);
}
function showTaskInfo(item) {
    const itemDisplay = document.createElement("div");
    itemDisplay.setAttribute("class", "itemdisplay");

    const itemTitle = document.createElement("div");
    const itemDescription = document.createElement("div");
    const itemDue = document.createElement("div");
    const itemPriority = document.createElement("div");
    const itemNotes = document.createElement("div");
    const itemComplete = document.createElement("div");

    itemTitle.textContent = item.title;
    itemDescription.textContent = item.description;
    itemDue.textContent = "Due: " + item.dueDate;
    itemPriority.textContent = "Priority: " + item.priority;
    itemNotes.textContent = item.notes;
    itemComplete.textContent = item.isComplete;

    itemDisplay.appendChild(itemTitle);
    itemDisplay.appendChild(itemDescription);
    itemDisplay.appendChild(itemDue);
    itemDisplay.appendChild(itemPriority);
    itemDisplay.appendChild(itemNotes);
    itemDisplay.appendChild(itemComplete);

    centerDisplay.appendChild(itemDisplay);
}



export {projectDisplay, createProject, showProjectInfo};
