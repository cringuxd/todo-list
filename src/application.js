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
        //add display to sidebar with DOM
    }
    removeProject(proj) {
        //modify code here
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
    }
    removeTodo(todo) {
        //modify code here
        this.#todo_items.pop(todo);
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
