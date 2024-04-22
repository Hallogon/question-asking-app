// Services
const getQuestionByIdService = require('../../../services/question/getById')

// Constants
const STATUS_CODES = require('../../../constants/statusCodes')

const getById = async (req, res, next) => {
  const { id } = req.params

  try {
    const question = await getQuestionByIdService(id)

    return res.status(STATUS_CODES.ok).json({ question })
  } catch (err) {
    next(err)
  }
}

module.exports = getById
