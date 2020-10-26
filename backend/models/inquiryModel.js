const mongoose = require('mongoose')

const inquirySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        index: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    kitSize: {
        type: Number,
        required: true,
        unique: true,
    },
    package: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('Inquiry', inquirySchema)
