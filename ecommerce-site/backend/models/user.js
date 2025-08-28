const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    wishlist: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item' // Assuming there is an Item model for wishlist items
    }]
});

module.exports = mongoose.model('User', userSchema);