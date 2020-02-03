import {domElements} from './base';

export const getInput = () => domElements.searchInput.value;

// FN TO CLEAR SEARCH INPUT FIELD.
export const clearInput = () => {
    domElements.searchInput.value = '';
};

// FN TO CLEAR SEARCH RESULT LIST PANE.
export const clearResults = () => {
    domElements.searchResultList.innerHTML = '';
};

const limitRecipeTitle = (title, limit = 17) => {
    const newTitle = [];
    if(title.length > limit) {
        title.split(' ').reduce((acc, current) => {
            if(acc + current.length <= limit) {
                newTitle.push(current);
            }
            return acc + current.length;
        }, 0);
        // return result.
        return `${newTitle.join(' ')} ...`;
    } else {
        return title;
    }
};

const renderRecipe = (recipe) => {
    const markup = `
    <li>
        <a class="results__link results__link" href=$#{recipe.recipe_id}>
            <figure class="results__fig">
                <img src=${recipe.image_url} alt=${recipe.title}>
            </figure>
            <div class="results__data">
                <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
                <p class="results__author">${recipe.publisher}</p>
            </div>
        </a>
    </li>
    `;
    domElements.searchResultList.insertAdjacentHTML('beforeend', markup);
};

export const renderResults = (recipes) => {
    recipes.forEach(recipe => {
        renderRecipe(recipe);
    });
;}