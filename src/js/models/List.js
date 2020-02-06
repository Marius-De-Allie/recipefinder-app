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

}

export default List; 