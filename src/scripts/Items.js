class Items {
    constructor() {
        this.items = [];
    }
    _addItem(item) {
        this.items.push(item);
    }
    _deleteItem(id) {
        this.items = this.items.filter((item) => item.id !== id);
    }
}
export { Items };