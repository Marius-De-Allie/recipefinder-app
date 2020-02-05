import axios from 'axios';

class Recipe {
    constructor(id) {
        this.id = id;
    }
    async getRecipe() {
        try {
            const result = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);
        } catch(e) {
            console.log(error);
        }
    }
}

export default Recipe;