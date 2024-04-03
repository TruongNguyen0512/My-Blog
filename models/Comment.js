const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Định nghĩa schema cho model Comment
const commentSchema = new Schema({
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    post: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

// Tạo model Comment từ schema đã định nghĩa
const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
