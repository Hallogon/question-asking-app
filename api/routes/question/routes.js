// Modules
const { Router } = require('express')
const { checkSchema } = require('express-validator')
const router = Router()

// Controllers
const create = require('../../controllers/question/create')
const getById = require('../../controllers/question/getById')
const vote = require('../../controllers/question/vote')

// Schemas
const validationCreateSchema = require('../../controllers/question/create/schema')
const validationGetByIdSchema = require('../../controllers/question/getById/schema')
const validationVoteSchema = require('../../controllers/question/vote/schema')

router.post('/', checkSchema(validationCreateSchema), create)

router.get('/:id', checkSchema(validationGetByIdSchema), getById)

router.post('/:id/vote', checkSchema(validationVoteSchema), vote)

module.exports = router
