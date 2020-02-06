import uniqid from 'uniqid';

class List {
    constructor() {
        this.items = [];
    }
    addItem(count, unit, ingredients) {
        const item = {
            id: uniqid(),
            count: count,
            unit: unit,
            ingredients: ingredients
        }
    }
    deleteItem(id) {
        const itemIndex = this.items.findIndex(item => item.id === id);
        this.items.splice(itemIndex, 1);
    }
    updateCount(id, newCount) {
        this.items.find(item => item.id === id).count = newCount;
    }
}

export default List; 