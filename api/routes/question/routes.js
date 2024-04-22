// Modules
const { Router } = require('express')

// Controllers
const create = require('../../controllers/question/create')
const getById = require('../../controllers/question/getById')
const vote = require('../../controllers/question/vote')

// Schemas
const validationCreateSchema = require('../../controllers/question/create/schema')
const validationGetByIdSchema = require('../../controllers/question/getById/schema')
const validationVoteSchema = require('../../controllers/question/vote/schema')

// Middlewares
const validate = require('../../middlewares/validate')

const router = Router()

router.post('/', validate(validationCreateSchema), create)

router.get('/:id', validate(validationGetByIdSchema), getById)

router.post('/:id/vote', validate(validationVoteSchema), vote)

module.exports = router
