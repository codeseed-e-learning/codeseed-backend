const mongoose = require('mongoose');

const CoursesSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: [true, 'Course Name is required']
    },
    CoueseAuthor: {
        type: String,
        required: [true, 'Author name is required']
    },
    CourseVideo: {
        type: String,
        required: [true, 'Course Video is required']
    },
    CourseDescription: {
        type: String,
        required: [true, 'Course Description is required']
    }
});

module.exports = mongoose.model('Course', CoursesSchema);
