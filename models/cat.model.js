const mongoose = require('mongoose');

const CatSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        default: 0
    }
});


module.exports = Cat = mongoose.model('cat', CatSchema);
