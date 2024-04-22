// Helpers
const { NotFound } = require('../../../helpers/httpErrors')

// Models
const Question = require('../../../models/Question')

const getById = async (id) => {
  const question = await Question.findById(id)

  if (!question) {
    throw new NotFound('Question not found')
  }

  return question
}

module.exports = getById
