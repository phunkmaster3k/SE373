var mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
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
        required: [true, 'Start date is required']
    },
    jobTitle: {
        type: String,
        required: [true, 'Title is required']
    },
    salary: {
        type: Number,
        required: [true, 'Salary is required']
    }
});

var Employee = mongoose.model('employee', employeeSchema);

module.exports = Employee;