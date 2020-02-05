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
            this.image = recipe.ime_url;
            this.url = recipe.source_url;
            this.ingredients = recipe.ingredients;
        } catch(e) {
            console.log(error);
        }
    }
}

export default Recipe;