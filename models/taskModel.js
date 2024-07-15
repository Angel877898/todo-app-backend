const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const taskSchema = new mongoose.Schema({
    id: { type: String, default: uuidv4 },
    name: String,
    description: String,
    startDate: Date,
    endDate: Date,
    email: String,
    completed: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
