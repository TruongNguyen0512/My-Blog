const Comment = require('../models/Comment');
const Post = require('../models/Post');

const createComment = async (req, res, next) => {
    try {
        const { content, user, post } = req.body;
        console.log(post)
        const newComment = new Comment({ content: content, user: user, post: post });
        
        const saveComment = await newComment.save();
        const POST = await Post.findById(post);
        res.status(201).json({ message: 'You create a comment!', The_post: post, The_comment: saveComment, author: POST.author });

    } catch (err) {
        next(err);
    }
}

module.exports = { createComment };
