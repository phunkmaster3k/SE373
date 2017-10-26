var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
    author: {
        type: String,
        //custom error message
        required: [true, 'Author is required']
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    reviewText: String,
    createdOn: {
        type: Date,
        //sets timestamp
        "default": Date.now
    }
});

//Review is table name
var Review = mongoose.model('Review', reviewSchema);

module.exports = Review;