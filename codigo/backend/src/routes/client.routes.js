const router = require('express').Router()
const { clientController } = require('../controllers')
// const { isAuthenticated } = require('../middlewares')
// const { isAuthorized } = require('../middlewares')

router.get('/:id', clientController.get)
router.put('/:id', clientController.update)

module.exports.client = router
