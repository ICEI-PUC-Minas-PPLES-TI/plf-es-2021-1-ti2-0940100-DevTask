const router = require('express').Router()
const { usersController } = require('../controllers')
// const { isAuthenticated } = require('../middlewares')
// const { isAuthorized } = require('../middlewares')

router.get('/:id', usersController.get)
router.get('/', usersController.list)
router.post('/register', usersController.register)
router.put("/:id", usersController.update);
router.delete("/:id", usersController.delete);

module.exports.users = router
