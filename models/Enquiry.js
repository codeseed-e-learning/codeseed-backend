const mongoose = require('mongoose');

const EnquirySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    message: {
        type: String,
        required: [true, 'Message is required']
    }
});

const Enquiry = mongoose.model('Enquiry', EnquirySchema);

module.exports = Enquiry;
