const router = require('express').Router()
const { devController } = require('../controllers')
// const { isAuthenticated } = require('../middlewares')
// const { isAuthorized } = require('../middlewares')

router.put('/:id', devController.update)

module.exports.dev = router
