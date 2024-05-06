const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    dni: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    cel: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('User', userSchema);