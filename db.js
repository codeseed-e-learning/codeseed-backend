require('dotenv').config(); // Load environment variables from .env

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MONGO DB Connected');
    } catch (err) {
        console.log(`An error occurred while connecting to the database: ${err}`);
    }
};

module.exports = connectDB;
