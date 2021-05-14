const router = require('express').Router()
const { clientController } = require('../controllers')
// const { isAuthenticated } = require('../middlewares')
// const { isAuthorized } = require('../middlewares')

router.put("/:id", clientController.update);

module.exports.client = router
