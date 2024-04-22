// Constants
const QUESTION_TYPES = require('../../../constants/questionTypes')

const schema = {
  text: {
    in: ['body'],
    trim: true,
    notEmpty: true,
    isString: true,
    errorMessage: 'Text field error',
  },
  type: {
    in: ['body'],
    trim: true,
    notEmpty: true,
    isIn: {
      options: [Object.values(QUESTION_TYPES)],
    },
    errorMessage: 'Type field error',
  },
  answers: {
    in: ['body'],
    isArray: {
      options: { min: 1 },
    },
    custom: {
      options: (answers) => {
        if (answers.some((answer) => typeof answer !== 'string')) {
          throw new Error('Answers must be strings')
        }

        return true;
      },
    },
    errorMessage: 'Answers field error',
  },
  correctAnswer: {
    in: ['body'],
    optional: true,
    isString: true,
    errorMessage: 'Correct answer field error',
  },
}

module.exports = schema
