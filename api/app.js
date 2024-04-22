// Modules
const express = require('express')
const bodyParser = require('body-parser')

// Config
const { PORT } = require('./app/config')

// Database
const connect = require('./database/connect')

// Middlewares
const errorHandler = require('./middlewares/errorHandler');

// Routes
const { questionRoutes } = require('./routes');

const app = express()

// Connect body-parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Connect routes
app.use('/api/questions', questionRoutes)

// Error Handler
app.use(errorHandler)

const start = async () => {
  await connect()
  app.listen(PORT, () => {
    console.log(`App has been started on the port ${PORT}...`)
  })
}

start()
