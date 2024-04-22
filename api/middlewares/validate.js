// Modules
const { checkSchema } = require('express-validator')

// Constants
const STATUS_CODES = require('../constants/statusCodes')

const validate = (schema) => {
  return async function (req, res, next) {
    const validationResult = await checkSchema(schema).run(req);

    const errors = validationResult.filter((r) => !r.isEmpty())

    if (errors.length) {
      return res
        .status(STATUS_CODES.unprocessableEntity)
        .json(errors.map((r) => r.mapped()))
    }

    next()
  }
}

module.exports = validate
