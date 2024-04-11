const Comment = require('../models/Comment');
const Post = require('../models/Post');

const createComment = async (req, res, next) => {
    try {
        const { content, user, post } = req.body;
        console.log(post);

        const newComment = new Comment({ content, user, post });

        // Kiểm tra xem user có tồn tại không
        if (!user) {
            return res.status(400).json({ message: 'User is required!' });
        }

        const saveComment = await newComment.save();
        const POST = await Post.findById(post);
        res.status(201).json({ message: 'You create a comment!', The_post: post, The_comment: saveComment, author: POST.author });
    } catch (err) {
        next(err);
    }
}



const updateCmt = async (req, res, next) => {
    try {
        const  content  = req.body.content;
        const cmtId = req.params.cmtid;

        // Tìm comment trong cơ sở dữ liệu
        const cmt = await Comment.findById(cmtId);
        
        // Kiểm tra xem comment có tồn tại hay không
        if (!cmt) {
            return res.status(404).json({ message: 'Comment not found' });
        }

        // Cập nhật nội dung của comment
        cmt.content = content;

        // Lưu comment đã cập nhật vào cơ sở dữ liệu
        const updatedComment = await cmt.save();

        res.status(200).json({ message: 'Comment updated successfully', updated_comment: updatedComment });
    } catch (err) {
        next(err);
    }
};

const deleteCmt  = async (req,res,next) =>{
    try {
        const cmtId =  req.params.cmtid;
        
        // Tìm comment trong cơ sở dữ liệu
        const comment = await Comment.findById(cmtId);
        
        // Kiểm tra xem comment có tồn tại không
        if (!comment) {
            return res.status(404).json({ message: 'Comment not found!' });
        }

        // Xóa comment
        await Comment.findByIdAndDelete(cmtId);
        
        res.status(201).json({ message: 'Your comment has been deleted!' });
    } catch (err) {
        next(err);
    }
}




module.exports = { createComment,updateCmt,deleteCmt};

