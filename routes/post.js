const express = require('express');
const router  = express.Router(); 

const { createPost, updatePost }  = require('../controllers/postController');
const { verifyAuthor } = require('../middleware/verifyAuthor');

router.post('/create-post', createPost); // Route để tạo mới bài post
router.put('/update-post/:postid', verifyAuthor, updatePost); // Route để cập nhật bài post

module.exports =  router;
