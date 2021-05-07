const router = require('express').Router()
const { usersController } = require('../controllers')
// const { isAuthenticated } = require('../middlewares')
// const { isAuthorized } = require('../middlewares')

router.get('/', usersController.list)
router.post('/register', usersController.register)
// router.put("/:id", isAuthenticated, usersController.update);
// router.delete("/:id", isAuthenticated, usersController.delete);

module.exports.users = router
