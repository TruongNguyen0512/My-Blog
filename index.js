const express = require('express');
require('./config/connectDb')
const app = express();
const AuthenRouter = require('./routes/auth'); // Import router auth


app.use(express.json()); // Middleware để parse JSON từ request body

app.use('/api/auth', AuthenRouter); // Sử dụng router auth

app.listen(3000, () => {
    console.log("This is My blog, created at 4/2/2024")
});
