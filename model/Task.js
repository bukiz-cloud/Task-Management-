import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
      },
  description: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    enum: ['pending', 'in progress', 'completed'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Task = mongoose.model('Task', taskSchema);

export default Task;