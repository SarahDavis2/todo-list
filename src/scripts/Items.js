class Items {
    constructor() {
        this.items = [];
        this.id = crypto.randomUUID();
    }
    _addItem(item) {
        this.items.push(item);
    }
    _deleteItem(id) {
        this.items = this.items.filter((item) => item.id !== id);
    }
    _storeItem(item) {
        localStorage.setItem(item.id, JSON.stringify(item));
    }

    // Dev Methods
    getItems() {
        return this.items;
    }
    getStorageItem(id) {
        return JSON.parse(localStorage.getItem(id));
    }
}
export { Items };