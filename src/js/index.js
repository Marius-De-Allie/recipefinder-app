// Global app controller
'use strict';
// import search module
import Search from './models/Search';
import {domElements, renderLoader} from './views/base';
import * as searchView from './views/searchView';

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
        // 4 Search for recipes.
        await state.search.getResults(); //returns a promise
        //  5 render results to UI.
        // console.log(state.search.result)
        searchView.renderResults(state.search.result);
    }
};

// form submit event handler.
domElements.searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    controlSearch();
});

// const search = new Search('pizza');
// console.log(search);
// console.log(search.__proto__ === Search.prototype);

