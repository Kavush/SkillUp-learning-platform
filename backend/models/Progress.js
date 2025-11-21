const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  progress: {
    type: Number,
    default: 0,
    min: 0,
    max: 100
  },
  completedModules: [{
    moduleId: Number,
    completedAt: Date
  }],
  quizResults: [{
    quizId: String,
    score: Number,
    totalQuestions: Number,
    completedAt: Date
  }],
  startedAt: {
    type: Date,
    default: Date.now
  },
  completedAt: Date,
  isCompleted: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

// Ensure one progress record per user per course
progressSchema.index({ user: 1, course: 1 }, { unique: true });

module.exports = mongoose.model('Progress', progressSchema);