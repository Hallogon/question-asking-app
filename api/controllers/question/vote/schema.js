const schema = {
  id: {
    in: ['params'],
    exists: true,
  },
  answer: {
    in: ['body'],
    trim: true,
    isString: true,
    errorMessage: 'Answer field error',
  },
}

module.exports = schema
