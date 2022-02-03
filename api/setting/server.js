const express = require('express')
const handlerError = require('../middlewares/handlerErrors')
const cors = require('cors')
const morgan = require('morgan')
const Routes = require('../routes/routes')

const server = express()

// Config server
server.use(cors())
server.use(morgan('dev'))
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use('/', Routes)
server.use(handlerError)

module.exports = server