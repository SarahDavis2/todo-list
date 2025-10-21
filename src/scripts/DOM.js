class DOM {
    static #showDialogBtn = document.querySelector(".show-dialog");
    static #dialog = document.querySelector("dialog");
    static #taskList = document.querySelector(".task-list ul");

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
        const li = document.createElement("li");
        DOM.#taskList.appendChild(li);

        const form = document.createElement("form");
        li.appendChild(form);

        const checkbox = document.createElement("input");
        const checkboxAttributes = {
            type: "checkbox",
            name: "task-done",
            id: "task-done",
        }
        this.#setAttributes(checkbox, checkboxAttributes);
        form.appendChild(checkbox);

        const checkboxLabel = document.createElement("label");
        checkboxLabel.setAttribute("for", "task-done"); /* Fix: Change Name to Increment */
        checkboxLabel.textContent = "Task Name Placeholder";
        form.appendChild(checkboxLabel);
    }
    #setAttributes(element, attributes) {
        for (const key in attributes) {
            element.setAttribute(key, attributes[key]);
        }
    }
}
export { DOM };