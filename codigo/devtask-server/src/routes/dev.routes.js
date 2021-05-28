const router = require('express').Router()
const { DevController } = require('../controllers')
const { isAuthenticated } = require('../middlewares')

router.post('/', DevController.create)
router.get('/', isAuthenticated, DevController.list)
router.get('/:id', DevController.get)
router.put('/', isAuthenticated, DevController.update)
router.delete('/', isAuthenticated, DevController.delete)

module.exports.dev = router
