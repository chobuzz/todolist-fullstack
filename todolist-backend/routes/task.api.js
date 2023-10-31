const express = require("express");
const taskController = require("../controllers/task.controller");
const router = express.Router();
const authController = require("../controllers/auth.controller");

router.post("/", authController.authenticate, taskController.createTask);

router.get("/", taskController.getTask);

router.put("/:id", taskController.updateTask);

router.delete("/:id", taskController.deleteTask);
console.log("hehe");
module.exports = router;
