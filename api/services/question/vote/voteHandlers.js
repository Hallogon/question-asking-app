// Constants
const QUESTION_TYPES = require('../../../constants/questionTypes')

const pollHandler = ({ votes }) => ({ votes })

const triviaHandler = ({ votes, answer, correctAnswer, type }) => ({
  votes,
  isCorrect: type === QUESTION_TYPES.trivia && correctAnswer === answer,
})

module.exports = {
  [QUESTION_TYPES.poll]: pollHandler,
  [QUESTION_TYPES.trivia]: triviaHandler,
}
