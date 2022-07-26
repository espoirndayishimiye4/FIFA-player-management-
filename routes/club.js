const express = require('express')
const app = express()

const {getAllclub, createclub, getOneclub, deleteOneclub, updateclub} = require('../controllers/club')

const routes = express.Router()

routes.route('/:_id').get(getOneclub).delete(deleteOneclub).patch(updateclub)
routes.route('/').get(getAllclub).post(createclub)

module.exports = routes
