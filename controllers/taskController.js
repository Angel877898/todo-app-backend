const Task = require('../models/taskModel');

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json({
            status: 'success',
            message: 'Tasks retrieved successfully',
            data: tasks
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
};

const createTask = async (req, res) => {
    const task = new Task(req.body);
    try {
        const savedTask = await task.save();
        res.status(201).json({
            status: 'success',
            message: 'Task created successfully',
            data: savedTask
        });
    } catch (error) {
        res.status(400).json({
            status: 'error',
            message: error.message
        });
    }
};

const updateTask = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedTask = await Task.findOneAndUpdate({ id }, req.body, { new: true });
        if (!updatedTask) return res.status(404).json({
            status: 'error',
            message: 'Task not found'
        });
        res.status(200).json({
            status: 'success',
            message: 'Task updated successfully',
            data: updatedTask
        });
    } catch (error) {
        res.status(400).json({
            status: 'error',
            message: error.message
        });
    }
};

const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedTask = await Task.findOneAndDelete({ id });
        if (!deletedTask) return res.status(404).json({
            status: 'error',
            message: 'Task not found'
        });
        res.status(200).json({
            status: 'success',
            message: 'Task deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
};

module.exports = {
    getTasks,
    createTask,
    updateTask,
    deleteTask
};