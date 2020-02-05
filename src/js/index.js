// Global app controller
'use strict';
// import search module
import Search from './models/Search';
import {domElements, renderLoader, clearLoader} from './views/base';
import * as searchView from './views/searchView';
import Recipe from './models/Recipe';

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
        // 4 Search for recipes.
        await state.search.getResults(); //returns a promise
        //  5 render results to UI.
        // console.log(state.search.result)
        clearLoader();
        searchView.renderResults(state.search.result);
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
