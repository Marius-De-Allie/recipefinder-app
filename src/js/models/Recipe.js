import axios from 'axios';

class Recipe {
    constructor(id) {
        this.id = id;
    }
    async getRecipe() {
        try {
            const {recipe} = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);
            this.title = recipt.title;
            this.author = recipe.publisher;
            this.image = recipe.image_url;
            this.url = recipe.source_url;
            this.ingredients = recipe.ingredients;
        } catch(e) {
            console.log(error);
        }
    }
    // Method to calculate cooking time.
    calcTime() {
        const numIngredients = this.ingredients.length;
        const periods = Math.ceil(numIngredients / 3);
        this.time = period * 15;
    }
    calcServings() {
        this.servings = 4;
    }
}

export default Recipe;