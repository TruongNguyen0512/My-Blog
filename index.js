const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
require('./config/connectDb')
const {errorHandler} =  require('./util/errorHandle')
const app = express();
const AuthenRouter = require('./routes/auth'); // Import router auth
const UserRouter = require('./routes/user')
const PostRouter = require('./routes/post')
const CommentRouter = require('./routes/comments')
const {authenticateUser} = require('./util/authenticateUser')

app.use(cookieParser())
app.use(express.json()); // Middleware để parse JSON từ request body
app.use(bodyParser.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
  

app.use('/api/auth', AuthenRouter); // Sử dụng router auth
app.use('/api/users', authenticateUser,UserRouter)
app.use('/api/posts',authenticateUser,PostRouter)
app.use('/api/comments',authenticateUser,CommentRouter)

app.use(errorHandler)
app.listen(3000, () => {
    console.log("This is My blog, created at 4/2/2024")
});
