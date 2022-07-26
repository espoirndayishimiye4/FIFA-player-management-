const express = require('express')
const app = express()

const {getAllPlayer, createPlayer, getOnePlayer, deleteOnePlayer, updatePlayer} = require('../controllers/players')

const routes = express.Router()

routes.route('/:_id').get(getOnePlayer).delete(deleteOnePlayer).patch(updatePlayer)
routes.route('/').get(getAllPlayer).post(createPlayer)

module.exports = routes