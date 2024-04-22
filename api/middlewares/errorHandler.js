// Constants
const STATUS_CODES = require('../constants/statusCodes')

// Helpers
const { HTTPError } = require('../helpers/httpErrors')

function errorHandler(err, _, res, _) {
  console.log(err);
  if (err instanceof HTTPError) {
    return res.status(err.statusCode)
      .json({ message: err.message, errors: err?.data })
  }

  return res.status(STATUS_CODES.internalServerError).json({
    message: 'Something went wrong, try again please!',
  })
}

module.exports = errorHandler
