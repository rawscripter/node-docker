const mongoose = require('mongoose');

const postScema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    body: {
        type: String,
        required: [true, 'Content is required']
    },
});

const Post = mongoose.model('Post', postScema);

module.exports = Post;