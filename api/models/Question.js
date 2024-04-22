// Modules
const mongoose = require('mongoose')

// Constants
const QUESTION_TYPES = require('../constants/questionTypes')

const modelName = 'Question'

const QuestionSchema = new mongoose.Schema({
  text: { 
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: Object.values(QUESTION_TYPES),
    required: true,
  },
  answers: {
    type: [String],
    required: true,
  },
  correctAnswer: { 
    type: String,
  },
  votes: { 
    type: Map,
    of: Number,
    default: {},
  },
}, { timestamps: true })

module.exports = mongoose.model(modelName, QuestionSchema, modelName)
