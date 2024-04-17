const Post = require('../models/Post');
const User = require('../models/User');

const createPost = async (req, res, next) => {
    try {
        const { title, content } = req.body;
        const author = req.user.userId; // Lấy ID của người dùng từ yêu cầu (request)

        // Tạo bài viết mới với thông tin của tác giả và ID của người tạo
        const post = new Post({ title, content, author });

        // Lưu bài viết mới vào cơ sở dữ liệu
        const savedPost = await post.save();

        // Trả về thông tin của bài viết cùng với tên của tác giả
        res.status(201).json({ post: savedPost, author: author });
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

const deletePost = async (req, res, next) => {
    const postId = req.params.postid;
    try {
        const deletedPost = await Post.findByIdAndDelete(postId);
        if (!deletedPost) {
            return res.status(404).json({ message: "Post not found" });
        }
        res.status(200).json({ message: "Your post has been deleted!" });
    } catch (err) {
        next(err);
    }
};

const getPosts = async (req,res,next) =>{

    try {
        const post = await Post.find()
        if(!post){
            res.status(403).json({message:"Post not found"})
        }
        res.status(201).json(post)
        console.log('test sucessfull')
    } catch (error) {
        next(err)
    }
}
const getAPost = async (req,res,next) =>{

    try {
        const postId = req.params.postid
        const post = await Post.findById(postId)
        if(!post){
            res.status(403).json({message:"Post not found"})
        }
        res.status(201).json(post)
        console.log('test sucessfull')
    } catch (error) {
        next(err)
    }
}
module.exports = { createPost,updatePost,deletePost,getPosts,getAPost}
