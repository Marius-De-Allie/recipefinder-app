class Likes {
    constructor() {
        this.likes = [];
    }
    addLike(id, title, author, image) {
        const like = {
            id: id,
            title: title,
            author: author,
            image: image
        };
        this.likes.push(like);
        return like;
    }
    deleteLike(id) {
        const index = this.likes.findIndex(like => like.id === id);
        this.likes.splice(index, 1);
    }
    isLiked(id) {
        // returns true is item is in likes array, false if not.
        return this.likes.findIndex(el => el.id === id) !== -1;
    }
    getNumberLikes() {
        return this.likes.length;
    }
    persistData() {
        localStorage.setItem('likes', JSON.stringify(this.likes));
    }
}

export default Likes;