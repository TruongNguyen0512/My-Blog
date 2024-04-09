const express  =  require('express') 
const { createComment } = require('../controllers/commentController')
const router  = express.Router() 

router.post('/new-comment',createComment)

module.exports = router 