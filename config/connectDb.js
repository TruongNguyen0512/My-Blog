const mongoose = require('mongoose');

// URL kết nối MongoDB, thay thế 'your_database_name' bằng tên của cơ sở dữ liệu bạn muốn sử dụng
const mongoURI = 'mongodb+srv://dannynguyen:321@cluster0.e1xdl9f.mongodb.net/Blog?retryWrites=true&w=majority&appName=Cluster0';

// Cấu hình kết nối với MongoDB
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err.message);
});

module.exports = mongoose