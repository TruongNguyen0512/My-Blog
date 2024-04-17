const express = require('express');
const router  = express.Router(); 

const { createPost, updatePost, deletePost, getPosts, getAPost }  = require('../controllers/postController');
const { verifyAuthorPost } = require('../middleware/verifyAuthor');
const { authenticateUser } = require('../util/authenticateUser');

router.post('/create-post', authenticateUser,createPost); // Route để tạo mới bài post
router.put('/update-post/:postid', authenticateUser,verifyAuthorPost, updatePost); // Route để cập nhật bài post
router.delete('/delete-post/:postid',authenticateUser,verifyAuthorPost,deletePost)  
router.get('/get-posts',getPosts)
router.get('/get-posts',getAPost)

module.exports =  router;
