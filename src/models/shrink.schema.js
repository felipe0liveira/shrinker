const mongoose = require('mongoose');

const ShrinkSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    short: {
        type: String,
        required: true,
        default: `short-${new Date().getTime()}`
    },
    clicks: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Shrink', ShrinkSchema);