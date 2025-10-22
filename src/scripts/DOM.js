class DOM {
    static #projectList = document.querySelector(".project-list ul");
    static #taskList = document.querySelector(".task-list ul");
    static #taskNum = 0;

    constructor() {
        const showDialogBtn = document.querySelector(".show-dialog");
        const dialog = document.querySelector("dialog");
        const dialogBtn = dialog.querySelector("button");
        
        // const main = document.querySelector("main");
        // const mainBtns = main.document.querySelectorAll("button");

        showDialogBtn.addEventListener("click", () => {
            dialog.showModal();
        });

        dialogBtn.addEventListener("click", (e) => {
            e.preventDefault();
            // CHANGE THIS TO INDEX JS??
            dialog.close();
            this.addProject();
        });

        const addTaskBtn = document.querySelector(".add-task");
        addTaskBtn.addEventListener("click", () => {
            this.addTask(); // CHANGE THIS TO INDEX JS??
        });
    }
    addProject() {
        const li = document.createElement("li");
        DOM.#projectList.appendChild(li);

        const projectBtn = document.createElement("button");
        projectBtn.textContent = "Project Name";
        li.appendChild(projectBtn);

        const deleteBtn = document.createElement("button");
        this.#addSvg(deleteBtn, `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>minus-box</title><path d="M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" /></svg>`);
        li.appendChild(deleteBtn);
    }
    addTask() {
        DOM.#taskNum++;

        const li = document.createElement("li");
        DOM.#taskList.appendChild(li);

        const form = document.createElement("form");
        form.setAttribute("method", "post");
        li.appendChild(form);

        this.#addHeader(form);
        this.#addEditExpand(form);
    }
    #addHeader(parentElement) {
        const header = this.#addDiv(parentElement, "header");
        this.#addLeft(header);
        this.#addTaskButton(header);
    }
    #addLeft(parentElement) {
        const left = this.#addDiv(parentElement, "left");
        this.#addCheckbox(left);
        this.#addShowDueDate(left);
    }
    #addCheckbox(parentElement) {
        const div = this.#addDiv(parentElement, "checkbox");

        const checkboxAttributes = {
            type: "checkbox",
            name: "task-done",
            id: `task-done${DOM.#taskNum}`,
        }        
        this.#addInput(div, checkboxAttributes);

        // Specialized label
        const checkboxLabel = document.createElement("label");
        checkboxLabel.setAttribute("for", `task-done${DOM.#taskNum}`);
        checkboxLabel.textContent = "Task Name";
        div.appendChild(checkboxLabel);
    }
    #addShowDueDate(parentElement) {
        const showDueDate = document.createElement("div");
        showDueDate.classList.add("show-due-date");
        showDueDate.textContent = "(yyyy-mm-dd)";
        parentElement.appendChild(showDueDate);
    }
    #addTaskButton(parentElement) {
        const btn = document.createElement("button");
        btn.setAttribute("type", "button");
        parentElement.appendChild(btn);

        this.#addSvg(btn, `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>playlist-edit</title><path d="M3 6V8H14V6H3M3 10V12H14V10H3M20 10.1C19.9 10.1 19.7 10.2 19.6 10.3L18.6 11.3L20.7 13.4L21.7 12.4C21.9 12.2 21.9 11.8 21.7 11.6L20.4 10.3C20.3 10.2 20.2 10.1 20 10.1M18.1 11.9L12 17.9V20H14.1L20.2 13.9L18.1 11.9M3 14V16H10V14H3Z" /></svg>`);

        const btnName = document.createElement("p")
        btnName.textContent = "Edit/Expand";
        btn.appendChild(btnName);
    }
    #addEditExpand(parentElement) {
        const editExpand = this.#addDiv(parentElement, "edit-expand");
        this.#addTaskName(editExpand);
        this.#addPriority(editExpand);
        this.#addDueDate(editExpand);
        this.#addNotes(editExpand);
    }
    #addTaskName(parentElement) {
        const taskName = this.#addDiv(parentElement, "task-name");
        this.#addLabel(taskName, "Task Name");

        const inputAttributes = {
            type: "text",
            name: "task-name",
            id: `task-name${DOM.#taskNum}`,
        }
        this.#addInput(taskName, inputAttributes);
    }
    #addPriority(parentElement) {
        const priority = this.#addDiv(parentElement, "priority-select");
        this.#addLabel(priority, "Priority");

        const priorityOptions = [
            "High",
            "Medium",
            "Low",
        ];
        this.#addSelect(priority, "Priority", priorityOptions);
    }
    #addDueDate(parentElement) {
        const dueDate = this.#addDiv(parentElement, "due-date");
        this.#addLabel(dueDate, "Due Date");
        const inputAttributes = {
            type: "date",
            name: "due-date",
            id: `due-date${DOM.#taskNum}`,
        }
        this.#addInput(dueDate, inputAttributes);
    }
    #addNotes(parentElement) {
        const notes = this.#addDiv(parentElement, "notes");
        this.#addLabel(notes, "Notes");
        const textareaAttributes = {
            name: "notes",
            id: `notes${DOM.#taskNum}`,
            rows: "3",
            cols: "75",
        }
        this.#addElem(notes, "textarea", textareaAttributes);
    }
    #addDiv(parentElement, className) {
        const div = document.createElement("div");
        div.classList.add(`${className}`);
        parentElement.appendChild(div); 
        
        return div;
    }
    #addLabel(parentElement, labelName) {
        const label = document.createElement("label");
        label.textContent = `${labelName}:`;

        // Replace space of labelName with dash for attribute consistency
        const attributeName = this.#createAttributeName(labelName);

        label.setAttribute("for", `${attributeName}${DOM.#taskNum}`);
        parentElement.appendChild(label);
    }
    #addSvg(parentElement, svgMarkup) {
        // Add inline svg
        const svgCtn = document.createElement('div');
        svgCtn.innerHTML = svgMarkup;
        parentElement.appendChild(svgCtn);
    }
    #createAttributeName(inputStr) {
        return inputStr.replace(" ", "-").toLowerCase();
    }
    #addSelect(parentElement, name, inputOptions) {
        const select = document.createElement("select");
        const selectAttributes = {
            name: `${name}`,
            id: `${this.#createAttributeName(name)}`,
        }
        this.#setAttributes(select, selectAttributes);
        parentElement.appendChild(select);
        this.#addSelectOptions(select, inputOptions);
    }
    #addSelectOptions(select, options) {
        options.forEach((option) => {
            const optionElem = document.createElement("option");
            optionElem.textContent = option;
            const attribute = this.#createAttributeName(option);
            optionElem.setAttribute("value", `${attribute}`);
            select.appendChild(optionElem);
        });
    }
    #addElem(parentElement, element, attributes) {
        const createdElem = document.createElement(`${element}`);
        this.#setAttributes(createdElem, attributes);
        parentElement.appendChild(createdElem);
    }
    #addInput(parentElement, inputAttributes) {
        this.#addElem(parentElement, "input", inputAttributes);
    }
    #setAttributes(element, attributes) {
        for (const key in attributes) {
            element.setAttribute(key, attributes[key]);
        }
    }
}
export { DOM };