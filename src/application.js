import { storeInfo } from "./index.js"
//Handles application logic, including management of todo-items, project(s), and default project instantiation
class project_list {
    #projects;
    constructor() {
        this.#projects = [];
    }
    get projects() {
        return this.#projects;
    }
    addProject(proj) {
        this.#projects.push(proj);
        storeInfo()
    }
    removeProject(proj) {
        let ind = this.#projects.indexOf(proj);
        this.#projects.splice(ind,1);
        storeInfo()
    }
    findProject(projTitle) {
        for(let i = 0; i < this.#projects.length; i++) {
            if(this.#projects[i].title == projTitle) {
                return this.#projects[i];
            }
        }
    }
}

class project {
    #todo_items;
    #title;
    constructor(title) {
        this.#todo_items = [];
        this.#title = title;
    }
    get todo_items() {
        return this.#todo_items;
    }
    addTodo(todo) {
        this.#todo_items.push(todo);
        storeInfo()
    }
    removeTodo(todo) {
        let ind = this.#todo_items.indexOf(todo);
        this.#todo_items.splice(ind,1);
        storeInfo()
    }
    get title() {
        return this.#title;
    }
    set title(t) {
        this.#title = t;
    }
}

class todo_item {
    #title;
    #description;
    #dueDate;
    #priority;
    #notes;
    #isComplete = false;
    constructor(title, description, dueDate, priority, notes) {
        this.#title = title;
        this.#description = description;
        this.#dueDate = dueDate;
        this.#priority = priority;
        this.#notes = notes; 
    }

    get title() {
        return this.#title;
    }
    set title(t) {
        this.#title = t;
    }

    get description() {
        return this.#description;
    }
    set description(desc) {
        this.#description = desc;
    }

    get dueDate() {
        return this.#dueDate;
    }
    set dueDate(date) {
        this.#dueDate = date;
    }

    get priority() {
        return this.#priority;
    }
    set priority(pri) {
        this.#priority = pri;
    }

    get notes() {
        return this.#notes;
    }
    set notes(n) {
        this.#notes = n;
    }

    get isComplete() {
        return this.#isComplete;
    }
    set isComplete(comp) {
        this.#isComplete = comp;
    }
    
}
export {project_list, project, todo_item};
