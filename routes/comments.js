const express  =  require('express') 
const { createComment, updateCmt, deleteCmt } = require('../controllers/commentController')
const { verifyAuthorCmt } = require('../middleware/verifyAuthor')
const router  = express.Router() 

router.post('/new-comment',createComment)
router.put('/update-comment/:cmtid',verifyAuthorCmt,updateCmt) 
router.delete('/delete-comment/:cmtid',verifyAuthorCmt,deleteCmt)


module.exports = router 