// Models
const Question = require('../../../models/Question')

const create = async ({ text, type, answers, correctAnswer }) => {
  return Question.create({ 
    text,
    type,
    answers,
    correctAnswer,
  })
}

module.exports = create
