require('dotenv').config({ path: __dirname + '/../.env' })

const config = {
  MONGOURI: process.env.MONGOURI,
  PORT: process.env.PORT || 4242,
}

module.exports = config
