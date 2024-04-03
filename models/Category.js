const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Định nghĩa schema cho model Post
const postSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    tags: [{ type: String }],
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    likes: { type: Number, default: 0 },
    views: { type: Number, default: 0 },
    featuredImage: { type: String },
    isPublished: { type: Boolean, default: false },
    slug: { type: String, unique: true },
    relatedPosts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
    metaData: {
        description: { type: String },
        keywords: [{ type: String }]
    }
});

// Tạo model Post từ schema đã định nghĩa
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
