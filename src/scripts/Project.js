import { Items } from "./Items.js";

class Project extends Items {
    static #DEFAULT_TITLE = "My Project";

    constructor() {
        super();
        this._title = Project.#DEFAULT_TITLE;
        this._note = null;
    }
    _setTitle(setTitle) {
        this._title = setTitle;
    }
    _setNote(setNote) {
        this._note = setNote;
    }
}
export { Project };