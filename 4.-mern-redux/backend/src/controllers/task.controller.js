const Task = require('../models/Tasks');

// @desc    Get all Tasks
// @route   GET /api/task
// @access  Public
exports.getTasks = async (req, res, next) => {
    try {
        const tasks = await Task.find();
        return res.status(200).json({
            success: true,
            count: tasks.length,
            data: tasks
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            msg: 'Server Error'
        });
    }
}

// @desc    Post Task
// @route   POST /api/task
// @access  Public
exports.addTask = async (req, res, next) => {
    try {
        const task = await Task.create(req.body);
        return res.status(201).json({
            success: true,
            data: task
        })
    } catch (err) {
        const {title, description} = req.body;
        if(!title || ! description){
            return res.status(400).json({
                success: false,
                msg : 'Por favor ingrese los campos'
            });
        } else {
            return res.status(500).json({
                success: false,
                msg: 'Server Error'
            })
        }
    }
}

// @desc    Delete Task
// @route   DELETE /api/task/:id
// @access  Public
exports.deleteTask = async (req, res, next) => {
    try {
        const task = await Task.findById(req.params.id);
        if(!task){
            return res.status(404).json({
                success: false,
                msg: 'No se encontro ningura tarea'
            });
        }
        await task.remove();
        return res.status(200).json({
            success: true,
            data: {},
            msg: 'Se elimino satisfactoriamente'
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            msg: 'Server Error'
        })
    }
}