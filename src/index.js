import "./styles.css";
import {project_list, project, todo_item} from "./application.js"
import {projectDisplay, createProject,showProjectInfo} from "./interface.js";

//LocalStorage information manipulation functions
function storeInfo() {
    let stored_projects = [];
    let stored_lengths = [];
    let stored_titles = [];
    let stored_descriptions = [];
    let stored_dates = [];
    let stored_priorities = [];
    let stored_notes = [];
    let stored_completions = [];
    for(let i = 0; i < projects.projects.length; i++) {
        stored_projects.push(projects.projects[i].title);
        stored_lengths.push(projects.projects[i].todo_items.length);
        for(let j = 0; j < projects.projects[i].todo_items.length; j++) {
            stored_titles.push(projects.projects[i].todo_items[j].title);
            stored_descriptions.push(projects.projects[i].todo_items[j].description);
            stored_dates.push(projects.projects[i].todo_items[j].dueDate);
            stored_priorities.push(projects.projects[i].todo_items[j].priority);
            stored_notes.push(projects.projects[i].todo_items[j].notes);
            stored_completions.push(projects.projects[i].todo_items[j].isComplete);
        }
    }
    localStorage.setItem("projects",JSON.stringify(stored_projects));
    localStorage.setItem("projectlengths", JSON.stringify(stored_lengths));
    localStorage.setItem("titles",JSON.stringify(stored_titles));
    localStorage.setItem("descriptions",JSON.stringify(stored_descriptions));
    localStorage.setItem("dates",JSON.stringify(stored_dates));
    localStorage.setItem("priorities",JSON.stringify(stored_priorities));
    localStorage.setItem("notes",JSON.stringify(stored_notes));
    localStorage.setItem("completions",JSON.stringify(stored_completions));
}

function loadInfo(projects) {
    //once localstorage is implemented, this will be the fallback if there is missing/corrupted data
    let k = 0;
    if(localStorage.getItem("projectlengths") != "[]") {
        console.log(localStorage.getItem("projectlengths"));
        let stored_projects = JSON.parse(localStorage.getItem("projects"));
        let stored_lengths = JSON.parse(localStorage.getItem("projectlengths"));
        let stored_titles = JSON.parse(localStorage.getItem("titles"));
        let stored_descriptions = JSON.parse(localStorage.getItem("descriptions"));
        let stored_dates = JSON.parse(localStorage.getItem("dates"));
        let stored_priorities = JSON.parse(localStorage.getItem("priorities"));
        let stored_notes = JSON.parse(localStorage.getItem("notes"));
        let stored_completions = JSON.parse(localStorage.getItem("completions"));
        
        for(let i = 0; i < stored_projects.length; i++) {
            projects.addProject(new project(stored_projects[i]));
            console.log(stored_projects.length);
            for(let j = 0; j < stored_lengths[i]; j++) {
                projects.projects[i].addTodo(new todo_item(stored_titles[k],stored_descriptions[k],stored_dates[k],stored_priorities[k],stored_notes[k]));
                projects.projects[i].todo_items[j].isComplete = stored_completions[k];
                k++;
            }
            createProject(projects.projects[i]);
        }
        showProjectInfo(projects.projects[0]);
    }
    else {
        projects.addProject(new project("Default 1"));
        projects.projects[0].addTodo(new todo_item("Default Todo", "This is a default todo item.", "01/01/2026", "high", "bla bla bla"));
        projects.projects[0].addTodo(new todo_item("Default Todo 2", "This is a default todo item.", "01/01/2026", "high", "bla bla bla"));
        console.log(projects.projects[0].todo_items[0].title);
        projects.addProject(new project("Default 2"));
        projects.projects[1].addTodo(new todo_item("Default Todo 3", "This is a default todo item.", "01/01/2026", "high", "bla bla bla"));
        projects.projects[1].addTodo(new todo_item("Default Todo 4", "This is a default todo item.", "01/01/2026", "high", "bla bla bla"));
        createProject(projects.projects[0]);
        createProject(projects.projects[1]);
        showProjectInfo(projects.projects[0]);
    }
    
}

let projects = new project_list();

loadInfo(projects);

export { projects, storeInfo };
