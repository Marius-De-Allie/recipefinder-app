'use strict';
const domElements = {
    searchInput: document.querySelector('.search__field'),
    searchForm: document.querySelector('.search'),
    searchResultList: document.querySelector('.results__list')
};

const renderLoader = parent => {
    const loader = `
        <div class="loader">
            <svg>
                <use href="img/icons.svg#icon-cw"></use>
            </svg>
        </div>
    `;
    parent.insertAdjecentHTML('afterbegin', loader);
};

export {domElements};