const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const Enquiry = require("./models/Enquiry");
const Course = require("./models/Courses"); // Import the Course model

const app = express();


connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post("/enquiry", async (req, res) => {
    const { name, phone, email, message } = req.body;

    console.log(req.body); // Log the request body

    try {
        const newEnquiry = new Enquiry({ name, phone, email, message });
        await newEnquiry.save();
        res.status(201).json({ message: "Enquiry submitted successfully" });
    } catch (err) {
        console.error(err); // Log the error for debugging
        res
            .status(500)
            .json({ error: "An error occurred while submitting the enquiry" });
    }
});

app.post("/courses", async (req, res) => {
    const { courseName, CoueseAuthor, CourseVideo, CourseDescription } = req.body;

    console.log(req.body); // Log the request body

    try {
        const newCourse = new Course({
            courseName,
            CoueseAuthor,
            CourseVideo,
            CourseDescription,
        });
        await newCourse.save();
        res.status(201).json({ message: "Course submitted successfully" });
    } catch (err) {
        console.error(err); // Log the error for debugging

        if (err.name === "ValidationError") {
            const errors = {};
            Object.keys(err.errors).forEach((key) => {
                errors[key] = err.errors[key].message;
            });
            return res.status(400).json({ errors });
        }

        res
            .status(500)
            .json({ error: "An error occurred while submitting the course" });
    }
});

app.get("/courses", async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (err) {
        console.error(err); // Log the error for debugging
        res
            .status(500)
            .json({ error: "An error occurred while fetching the courses" });
    }
});

app.listen(9004, () => {
    console.log("Server running on http://localhost:9004");
});
