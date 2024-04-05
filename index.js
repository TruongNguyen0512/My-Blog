const express = require('express');
const cookieParser = require('cookie-parser');
require('./config/connectDb')
const {errorHandler} =  require('./util/errorHandle')
const app = express();
const AuthenRouter = require('./routes/auth'); // Import router auth
const UserRouter = require('./routes/user')
const PostRouter = require('./routes/post')
const {authenticateUser} = require('./util/authenticateUser')

app.use(cookieParser())
app.use(express.json()); // Middleware để parse JSON từ request body

app.use('/api/auth', AuthenRouter); // Sử dụng router auth
app.use('/api/users', authenticateUser,UserRouter)
app.use('/api/posts',authenticateUser,PostRouter)

app.use(errorHandler)
app.listen(3000, () => {
    console.log("This is My blog, created at 4/2/2024")
});
