import express  from 'express';
import {
  createTask,
  getAllTasks,
  getTaskById,
  updateTaskById,
  deleteTaskById,
  
} from '../controller/taskController.js';

const router = express.Router();

// Create a new task
router.post('/task', createTask);

// Get all tasks
router.get('/task', getAllTasks);

// Get a task by ID
router.get('/task/:id', getTaskById);

// Update a task by ID
router.patch('/task/:id', updateTaskById);

// Delete a task by ID
router.delete('/task/:id', deleteTaskById);

export default router;