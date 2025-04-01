import "./styles.css";
import {project_list, project, todo_item} from "./application.js"
import {projectDisplay, createProject,showProjectInfo} from "./interface.js";
//Project Structure:

/*
    information:
    - todo-item: object with title, description, dueDate, priority, notes, and checklist
    - projects: groups/"arrays" of todo-items, start with 1 default project
    - projects will be held in their own array

    application logic:
    <->Functions (todo-item)<->
    - newTodo():
    - setCompleteTodo():
    - setTodoPriority():
    - setTodoTitle():
    - setTodoDescription():
    - setTodoDueDate():
    - setTodoNotes():
    - setTodoChecklist():

    <->Functions (project)<->
    - newProject():

    DOM manipulation:

    User Interface:
    <->New Task Button<->
    - 
    Information Storage (Web Storage API/localStorage)

*/

//Create project list, add default project
let projects = new project_list();
projects.addProject(new project("Default 1"));
projects.projects[0].addTodo(new todo_item("Default Todo", "This is a default todo item.", "01/01/2026", "high", "bla bla bla"));
projects.projects[0].addTodo(new todo_item("Default Todo 2", "This is a default todo item.", "01/01/2026", "high", "bla bla bla"));
createProject(projects.projects[0]);
console.log(projects.projects[0].todo_items[0].title);
projects.addProject(new project("Default 2"));
projects.projects[1].addTodo(new todo_item("Default Todo 3", "This is a default todo item.", "01/01/2026", "high", "bla bla bla"));
projects.projects[1].addTodo(new todo_item("Default Todo 4", "This is a default todo item.", "01/01/2026", "high", "bla bla bla"));
createProject(projects.projects[1]);
console.log(projects.projects[0].todo_items[0].title);
showProjectInfo(projects.projects[0]);
