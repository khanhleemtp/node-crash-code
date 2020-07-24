const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// instance of Schema
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true });
// Tự động tạo thời gian khi cập nhật, update ...

// tên model phải số ít
const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;

