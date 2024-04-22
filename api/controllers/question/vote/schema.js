const schema = {
  id: {
    in: ['query'],
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
