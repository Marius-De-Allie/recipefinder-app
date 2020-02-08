class Likes {
    constructor() {
        this.likes = [];
    }
    addLike(id, title. author, image) {
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
}

export default Likes;