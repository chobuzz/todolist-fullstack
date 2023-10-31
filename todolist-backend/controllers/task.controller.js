const Task = require("../models/Task");

const taskController = {};

taskController.createTask = async (req, res) => {
  try {
    const { task, isComplete } = req.body;
    const { userId } = req;
    const newTask = new Task({ task, isComplete, author: userId });
    await newTask.save();
    res.status(200).json({ status: "ok", data: newTask });
  } catch (err) {
    res.status(400).json({ status: "fail", error: err });
  }
};

taskController.getTask = async (req, res) => {
  try {
    const taskList = await Task.find({}).populate("author");
    //populate 참고문서 https://mongoosejs.com/docs/populate.html;
    res.status(200).json({ status: "ok", data: taskList });
  } catch (err) {
    res.status(400).json({ status: "fail", error: err });
  }
};

taskController.updateTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const { task, isComplete } = req.body;
    const updatedTask = await Task.findByIdAndUpdate(taskId, {
      task,
      isComplete,
    });
    res.status(200).json({ status: "ok", data: updatedTask });
  } catch (err) {
    res.status(400).json({ status: "fail", data: err });
  }
};

taskController.deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const deleteItem = await Task.findByIdAndDelete(taskId);
    res.status(200).json({ status: "ok", data: deleteItem });
  } catch (err) {}
};

module.exports = taskController;
