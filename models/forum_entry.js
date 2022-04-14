const mongoose = require('mongoose');

const ForumEntry = mongoose.model('help', {
    author: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    images: [String],
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = ForumEntry;