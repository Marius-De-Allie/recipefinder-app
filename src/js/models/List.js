import uniqid from 'uniqid';

class List {
    constructor() {
        this.items = [];
    }
    addItem(count, unit, ingredient) {
        const item = {
            id: uniqid(),
            count: count,
            unit: unit,
            ingredient: ingredient
        }
        this.items = [...this.items, item];
        return item;
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