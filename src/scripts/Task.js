import { Project } from "./Project.js";
import { format } from "date-fns";

class Task extends Project {
    #priority = null;
    #dueDate = null;
    #notes = null;
    #isDone = false;

    constructor() {
        super();
    }
    #setPriority(setStatus) {
        this.#priority = setStatus;
    }
    #setDueDate(year, month, day) {
        this.#dueDate = format(new Date(year, month, day), "yyyy-MM-dd");
    }
    #setNote(setNote) {
        this.#notes = setNote;
    }
    #setDone(setBool) {
        this.#isDone = setBool;
    }
}
export { Task };