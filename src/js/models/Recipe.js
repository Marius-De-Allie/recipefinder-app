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
        const period = Math.ceil(numIngredients / 3);
        this.time = period * 15;
    }
    calcServings() {
        this.servings = 4;
    }
    parseIngredients() {
        const unitsLong = ['tablespoons', 'tablespoon', 'ounces', 'ounce', 'teaspoons', 'teaspoon', 'cups', 'pounds'];
        const unitsShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound', 'kg', 'g'];
        const newIngredients = this.ingredients.map(el => {
            // Uniform units.
            let ingredient = el.toLowerCase();
            unitsLong.forEach((el, index) => {
                ingredient = ingredient.replace(el, unitsShort[index]);
            });

            // Remove parenthesis.
            ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ');

            // Parse ingreidents into count, unit and ingredient
            const ingArray = ingredient.split(' ');
            const unitIndex = ingArray.findIndex(element => unitsShort.includes(element));
            let objIng;
            if(unitIndex > -1) {
                const arrayCount = ingArray.slice(0, unitIndex);
                let count;
                if(arrayCount.length === 1) {
                    count = ingArray[0].replace('-', '+');
                } else {
                    count = eval(ingArray.slice(0, unitIndex).join('+'));
                }
                objIng = {
                    count: count,
                    unit: ingArray[unitIndex],
                    ingredient: ingArray.slice(unitIndex + 1).join(' ')
                };
            } else if (parseInt(ingArray[0], 10)) {
                objIng = {
                    count: parseInt(ingArray[0], 10),
                    unit: '',
                    ingredient: ingArray.slice(1).join(' ')
                };
            } else if (unitIndex === -1) {
                objIng = {
                    count: 1,
                    unit: '',
                    ingredient: ingredient 
                };
            }
            
            return objIng;
        });
        this.ingredients = newIngredients;
    }
    updateServings(type) {
        const newServings = type === 'dec' ? this.servings - 1 : this.servings + 1; 

        this.ingredients.forEach(ing => {
            ing.count *= (newServings / this.servings);
        });
        this.servings = newServings;
    }
}

export default Recipe;