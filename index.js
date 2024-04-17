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
const cors = require('cors')

app.use(cookieParser())
app.use(express.json()); // Middleware để parse JSON từ request body
app.use(bodyParser.json())
const corsOptions = {
  origin: '*', // Chấp nhận yêu cầu từ tất cả các nguồn
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Chỉ chấp nhận các phương thức GET, POST, PUT, DELETE
  allowedHeaders: ['Authorization', 'Content-Type'], // Chỉ chấp nhận các tiêu đề được liệt kê
  credentials: true // Cho phép gửi cookie qua CORS
};

// Sử dụng middleware cors với các tùy chọn
app.use(cors(corsOptions));

app.use('/api/auth', AuthenRouter); // Sử dụng router auth
app.use('/api/users', authenticateUser,UserRouter)
app.use('/api/posts',PostRouter)
app.use('/api/comments',authenticateUser,CommentRouter)

app.use(errorHandler)
app.listen(3000, () => {
    console.log("This is My blog, created at 4/2/2024")
});
