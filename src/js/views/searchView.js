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

const createButton = (page, type) => `
    <button class="btn-inline results__btn--${type}">
        <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
        </svg>
        <span>Page ${type === 'prev' ? page - 1 : page + 1}</span>
    </button>
`
const renderButtons = (page, numResults, resPerPage) => {
    const pages = Math.ceil(numResults / resPerPage);
    let button;
    if(page === 1 && pages > 1) {
        button = createButton(page, 'next');
    } else if(page < pages) {
        button = `
            ${createButton(page, 'prev')}
            ${createButton(page, 'next')}
        `;
    } else if(page === pages && pages > 1) {
        button = createButton(page, 'prev');
    }
    domElements.resultsPages.insertAdjacentHTML('afterbegin', button);
};

export const renderResults = (recipes, page = 1, resPerPage = 10) => {
    const start = (page - 1 ) * resPerPage;
    const end = page * resPerPage;
    recipes.slice(start, end).forEach(recipe => {
        renderRecipe(recipe);
    });
;}