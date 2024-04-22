// Services
const createQuestionService = require('../../../services/question/create')

// Constants
const STATUS_CODES = require('../../../constants/statusCodes')

const create = async (req, res, next) => {
  const { text, type, answers, correctAnswer } = req.body

  try {
    const question = await createQuestionService({ text, type, answers, correctAnswer })

    return res.status(STATUS_CODES.created).json({ questionId: question.id })
  } catch (err) {
    next(err)
  }
}

module.exports = create
