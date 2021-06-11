const express = require('express')
const cors = require('cors')
const routes = require('../../routes')

const app = express()
app.set('port', process.env.PORT || 3000)
app.use(cors())
app.use(express.json())
Object.keys(routes).forEach((key) => app.use(`/v1/${key}`, routes[key]))

module.exports = app
