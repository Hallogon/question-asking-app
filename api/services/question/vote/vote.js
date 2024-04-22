// Models
const Question = require('../../../models/Question')

// Constants
const QUESTION_TYPES = require('../../../constants/questionTypes')

// Helpers
const { NotFound, BadRequest } = require('../../../helpers/httpErrors')

const vote = async (id, answer) => {
  const question = await Question.findById(id)

  if (!question) {
    throw new NotFound('Question not found')
  }

  const questionType = question.type
  const questionAnswers = question.answers
  const questionCorrectAnswer = question.correctAnswer

  if (!questionAnswers.includes(answer)) {
    throw new BadRequest('Question not found')
  }
  
  const votes = question.votes
  const currentAnswerCount = votes.get(answer) || 0

  votes.set(answer, currentAnswerCount + 1)

  await question.save()

  switch (questionType) {
    case QUESTION_TYPES.trivia:
      return {
        votes,
        isCorrect: questionType === QUESTION_TYPES.trivia
          && questionCorrectAnswer === answer,
      }
    case QUESTION_TYPES.trivia:
      return { votes }
    default:
      return {}
  }
}

module.exports = vote
