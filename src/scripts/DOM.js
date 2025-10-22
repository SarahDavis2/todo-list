class DOM {
    static #showDialogBtn = document.querySelector(".show-dialog");
    static #dialog = document.querySelector("dialog");
    static #taskList = document.querySelector(".task-list ul");
    static #taskNum = 0;

    constructor() {
        DOM.#showDialogBtn.addEventListener("click", () => {
            DOM.#dialog.showModal();
        });

        const addTaskBtn = document.querySelector(".add-task");
        addTaskBtn.addEventListener("click", () => {
            this.addTask();
        });
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
        this.#addButton(header);
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
    #addButton(parentElement) {
        const btn = document.createElement("button");
        btn.setAttribute("type", "button");
        parentElement.appendChild(btn);

        const svg = document.createElement("svg");
        // FIX: ADD SVG
        btn.appendChild(svg);

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