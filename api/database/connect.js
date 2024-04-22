// Modules
const mongoose = require('mongoose')

// Config
const { MONGOURI } = require('../app/config')

const connect = () => {
  try {
    return mongoose.connect(MONGOURI)
  } catch (err) {
    console.log('Server Error!', err.message)
    process.exit(1)
  }
}

module.exports = connect
