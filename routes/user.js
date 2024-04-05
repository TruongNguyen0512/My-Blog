const express = require('express')
const {getUser,updateUser,deleteUser} =  require('../controllers/userController')
const  verifyAdmin= require('../middleware/verifyAdmin')
const router = express.Router()

router.get('/:id',getUser)  
router.put('/update/:id',updateUser)
router.delete('/:id',verifyAdmin,deleteUser)
module.exports = router 
