const router = require('express').Router()
const { devFieldController } = require('../controllers')
// const { isAuthenticated } = require('../middlewares')
// const { isAuthorized } = require('../middlewares')

router.get('/', devFieldController.list)
router.post('/create', devFieldController.create)

module.exports.devfield = router
