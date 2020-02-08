import {domElements} from './base';
import {limitRecipeTitle} from './searchView';

const toggleLike = isLiked => {
    const iconString = isLiked ? 'icon-heart' : 'icon-heart-outlined';
    document.querySelector('.recipe__love use').setAttribute('href', `img/icons.svg#${iconString}`);
};

const toggleLikeMenu = numLikes => {
    if(numLikes > 0) {
        domElements.likesMenu.classList.remove('hidden');
    } else {
        domElements.likesMenu.classList.add('hidden');
    }
};

const renderLike = like => {
    const markup = `
        <li>
            <a class="likes__link" href="#${like.id}">
                <figure class="likes__fig">
                    <img src="${like.image}" alt="${like.title}">
                </figure>
                <div class="likes__data">
                    <h4 class="likes__name">${like.title}</h4>
                    <p class="likes__author">${like.author}</p>
                </div>
            </a>
        </li>
    `;
    domElements.likesList.insertAdjacentHTML('beforeend', markup);
}

const deleteLike = id => {
    const el = document.querySelector(`.likes__link[href*="${id}"]`).parentElement;
    if(el) {
        el.remove();
    }
};

export {toggleLike, toggleLikeMenu, renderLike, deleteLike};