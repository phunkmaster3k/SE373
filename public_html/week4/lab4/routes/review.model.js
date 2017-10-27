var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'First name is required']
    },
    lastname: {
        type: String,
        required: [true, 'Last name is required']
    },
    department: {
        type: String,
        required: [true, 'Department is required']
    },
    startDate: {
        type: Date,
        "default": Date.now,
        required: [true, 'date is required']
    },
    jobTitle: {
        type: String,
        required: [true, 'Title is required']
    },
    salary: {
        type: String,
        required: [true, 'Salary is required']
    }
});

//Review is table name
var Employee = mongoose.model('employee', reviewSchema);

module.exports = Employee;