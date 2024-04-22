class HTTPError extends Error {
  constructor(statusCode, message, data = undefined) {
    super(message)

    this.statusCode = statusCode
    this.data = data
  }
}

class BadRequest extends HTTPError {
  constructor(message, data) {
    super(STATUS_CODES.badRequest, message, data)
  }
}

class NotFound extends HTTPError {
  constructor(message, data) {
    super(STATUS_CODES.notFound, message, data)
  }
}

class InternalServerError extends HTTPError {
  constructor(message, data) {
    super(STATUS_CODES.unauthorized, message, data)
  }
}

module.exports = {
  HTTPError,
  BadRequest,
  NotFound,
  InternalServerError,
}
