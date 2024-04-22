const STATUS_CODES = Object.freeze({
  ok: 200,
  created: 201,
  badRequest: 400,
  notFound: 404,
  unprocessableEntity: 422,
  internalServerError: 500,
})

module.exports = STATUS_CODES
