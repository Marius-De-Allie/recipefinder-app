// Global app controller
'use strict';
// import search module
import Search from './models/Search';
import {domElements, renderLoader, clearLoader} from './views/base';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import Recipe from './models/Recipe';
import List from './models/List';

// Global app state
const state = {

};

const controlSearch = async () => {
    // 1 get query from view.
    const query = searchView.getInput(); 

    if(query) {
        //  2 New search object and add to state.
        state.search = new Search(query);
        // 3. Prepare UI for results.
        searchView.clearInput();
        searchView.clearResults();
        // Render loading spinner icon.
        renderLoader(domElements.resultsElement);
        try {
            // 4 Search for recipes.
            await state.search.getResults(); //returns a promise
            //  5 render results to UI.
            // console.log(state.search.result)
            clearLoader();
            searchView.renderResults(state.search.result);
        } catch(e) {
            clearLoader();
        }
    }
};

// form submit event handler.
domElements.searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    controlSearch();
});

// Pagination button click event handlers.
domElements.resultsPages.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-inline')
    if(btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    };
});

const controlRecipe = async () => {
    // Get id from url.
    const id = window.location.hash.replace('#', '');
    if(id) {
        // Prepare UI for changes.
        recipeView.clearRecipe();
        renderLoader(domElements.recipe);
        // Highlight selected search item.
        if(state.search) {
            searchView.highlightSelected(id);
        }
        //Create new recipe object.
        state.recipe = new Recipe(id);

        // Get recipe data.
        try {
            await state.recipe.getRecipe();
            state.recipe.parseIngredients();
            // Calculate time and servings.
            state.recipe.calcServings();
            state.recipe.calcTime();
            // Render recipe.
            clearLoader();
            recipeView.renderRecipe(state.recipe);
        } catch(e) {
            console.log(e);
        }
    }
}

window.addEventListener('hashchange', controlRecipe);
window.addEventListener('load', controlRecipe);
// Handling recipe button clicks.
domElements.recipe.addEventListener('click', evt => {
    if(evt.target.matches('.btn-decrease, .btn-decrease *')) {
        if(state.recipe.servings > 1) {
            state.recipe.updateServings('dec');
            recipeView.updateServingsIngredients(state.recipe)
        }
    } else if(evt.target.matches('.btn-increase, .btn-increase *')) {
        state.recipe.updateServings('inc');
        recipeView.updateServingsIngredients(state.recipe)
    } else if(evt.target.matches('.recipe__btn--add, recipe__btn--add *')) {
        controlList();
    }
});

