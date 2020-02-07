'use strict';
const domElements = {
    searchInput: document.querySelector('.search__field'),
    searchForm: document.querySelector('.search'),
    searchResultList: document.querySelector('.results__list'),
    resultsElement: document.querySelector('.results'),
    resultsPages: document.querySelector('.results__pages'),
    recipe: document.querySelector('.recipe'),
    shoppingList: document.querySelector('.shopping__list')
};

const renderLoader = parent => {
    const loader = `
        <div class="loader">
            <svg>
                <use href="img/icons.svg#icon-cw"></use>
            </svg>
        </div>
    `;
    parent.insertAdjacentHTML('afterbegin', loader);
};

const clearLoader = () => {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.remove();
    }
};

export {domElements, renderLoader, clearLoader};