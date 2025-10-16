import { Items } from "./Items.js";
import { Project } from "./Project.js";
import { Task } from "./Task.js";

class AppController {
    constructor() {
        this.projects = new Items();
        this.projects.addItem(new Project());
    }
    submitTask() {
        
    }
}