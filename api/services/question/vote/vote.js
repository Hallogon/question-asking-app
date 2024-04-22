// Models
const Question = require('../../../models/Question')

// Constants
const QUESTION_TYPES = require('../../../constants/questionTypes')

// Helpers
const { NotFound, BadRequest } = require('../../../helpers/httpErrors')

// Handlers
const handlers = require('./voteHandlers')

const vote = async (id, answer) => {
  const question = await Question.findById(id)

  if (!question) {
    throw new NotFound('Question not found')
  }

  const { answers, correctAnswer, type, votes } = question

  if (!answers.includes(answer)) {
    throw new BadRequest('Invalid answer')
  }

  if (!Object.values(QUESTION_TYPES).includes(type)) {
    throw new BadRequest('Invalid vote type')
  }

  const currentAnswerCount = votes.get(answer) || 0

  votes.set(answer, currentAnswerCount + 1)

  await question.save()

  const handler = handlers[type];

  return handler({ votes, answer, correctAnswer, type });
}

module.exports = vote
