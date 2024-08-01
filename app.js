const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const Enquiry = require('./models/Enquiry');

const app = express();

// Connect to the database
connectDB();

// Middleware to parse JSON and URL-encoded request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable CORS for all routes
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/enquiry', async (req, res) => {
    const { name, phone, email, message } = req.body;

    console.log(req.body); // Log the request body

    try {
        const newEnquiry = new Enquiry({ name, phone, email, message });
        await newEnquiry.save();
        res.status(201).json({ message: 'Enquiry submitted successfully' });
    } catch (err) {
        console.error(err); // Log the error for debugging
        res.status(500).json({ error: 'An error occurred while submitting the enquiry' });
    }
});

app.listen(9004, () => {
    console.log('Server running on http://localhost:9004');
});
