const Post = require('../models/Post');
const User = require('../models/User');

const createPost = async (req, res, next) => {
    try {
        const { title, content, author } = req.body;

        // Tìm thông tin của người dùng dựa trên userId trong req.body
        const authorInfo = await User.findById(author);

        if (!authorInfo) {
            return res.status(404).json({ message: 'Author not found' });
        }

        // Tạo bài viết mới với thông tin của tác giả
        const post = new Post({ title, content, author: authorInfo });

        // Lưu bài viết mới vào cơ sở dữ liệu
        const savedPost = await post.save();

        // Trả về thông tin của bài viết cùng với tên của tác giả
        res.status(201).json({ post: savedPost, author: authorInfo.name });
    } catch (error) {
        next(error);
    }
};  

const updatePost = async (req,res,next) =>{
    const postId = req.params.postid
    const updateFields =  req.body 
    try {
        const post = await Post.findByIdAndUpdate(postId)
        Object.assign(post, updateFields); 

        const updatePost = await post.save()
        console.log(updatePost)
        res.status(201).json({message:'Update Successfull !',updatePost})
    } catch (err) {
        next(err)
    }
}

module.exports = { createPost,updatePost}
