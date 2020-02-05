import axios from 'axios';

class Recipe {
    constructor(id) {
        this.id = id;
    }
    async getRecipe() {
        try {
            const res = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);
            this.title = res.data.recipe.title;
            this.author = res.data.recipe.publisher;
            this.image = res.data.recipe.image_url;
            this.url = res.data.recipe.source_url;
            this.ingredients = res.data.recipe.ingredients;
        } catch(e) {
            console.log(e);
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