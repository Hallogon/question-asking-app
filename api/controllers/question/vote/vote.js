// Services
const voteQuestionService = require('../../../services/question/vote')

// Constants
const STATUS_CODES = require('../../../constants/statusCodes')

const vote = async (req, res, next) => {
  const { id } = req.params;
  const { answer } = req.body;

  try {
    const { votes, isCorrect } = await voteQuestionService(id, answer)

    return res.status(STATUS_CODES.ok).json({ votes, isCorrect })
  } catch (err) {
    next(err)
  }
}

module.exports = vote
