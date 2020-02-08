import {domElements} from './base';

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

export {toggleLike};