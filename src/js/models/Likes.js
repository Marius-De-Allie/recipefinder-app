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
}

export default Likes;