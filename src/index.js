import {project_list, project, todo_item} from "./application.js"
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

    Information Storage (Web Storage API/localStorage)

*/

//Create project list, add default project
let projects = new project_list();
projects.addProject(new project());
projects.projects[0].addTodo(new todo_item("Default Todo", "This is a default todo item.", "01/01/2026", "high", "bla bla bla"));
console.log(projects.projects[0].todo_items[0].title);
