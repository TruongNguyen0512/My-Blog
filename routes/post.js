const express = require('express');
const router  = express.Router(); 

const { createPost, updatePost, deletePost }  = require('../controllers/postController');
const { verifyAuthor } = require('../middleware/verifyAuthor');


router.post('/create-post', createPost); // Route để tạo mới bài post
router.put('/update-post/:postid', verifyAuthor, updatePost); // Route để cập nhật bài post
router.delete('/delete-post',verifyAuthor,deletePost)

module.exports =  router;
