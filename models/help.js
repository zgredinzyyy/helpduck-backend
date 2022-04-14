const mongoose = require('mongoose');

const HelpEntry = mongoose.model('helpentries', {
    author: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    thumbnail: String,
    url: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = HelpEntry;