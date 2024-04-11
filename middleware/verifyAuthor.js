
const Post = require('../models/Post');
const Comment  = require('../models/Comment')

const verifyAuthorPost = async (req, res, next) => {
    try {
        const postId = req.params.postid; // Lấy id của bài post từ URL
        const post = await Post.findById(postId); // Tìm bài post trong cơ sở dữ liệu
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        // Kiểm tra xem người dùng hiện tại có phải là tác giả của bài post không
        if (post.author.toString() !== req.user.userId) {
            return res.status(403).json({ message: 'Unauthorized. You are not the author of this post' });
        }
        next(); // Nếu là tác giả, chuyển điều khiển đến route handler tiếp theo
    } catch (error) {
        next(error);
    }
};


const verifyAuthorCmt = async(req,res,next) =>{
    try {
       const cmtId = req.params.cmtid  
       const cmt  = await Comment.findById(cmtId)
       
       if(cmt.user.toString() !==req.user.userId){
           res.status(403).json({message:'you are not the author of this comment'})
       }
       console.log('verifyAuthor ')
       next()
    } catch (err) {
         next(err)
    }
 
 }
module.exports = {verifyAuthorPost,verifyAuthorCmt}
