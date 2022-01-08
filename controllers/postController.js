const Post = require('../models/postModel');


exports.getPosts = async (req, res, next) => {
    try {
        const posts = await Post.find();
        res.status(200).json({
            data: posts
        });
    }
    catch (err) {
        res.status(500).json({
            error: err
        });
    }
}

exports.getPost = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json({
            data: post
        });
    }
    catch (err) {
        res.status(500).json({
            error: err
        });
    }
}

exports.createPost = async (req, res, next) => {
    try {
        const post = await Post.create(req.body);
        res.status(201).json({
            data: post
        });
    }
    catch (err) {
        res.status(500).json({
            error: err
        });
    }
}

exports.updatePost = async (req, res, next) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            data: post
        });
    }
    catch (err) {
        res.status(500).json({
            error: err
        });
    }
}
exports.deletePost = async (req, res, next) => {
    try {
        await Post.findByIdAndDelete(req.params.id);
        res.status(200).json({
            data: null
        });
    }
    catch (err) {
        res.status(500).json({
            error: err
        });
    }
}