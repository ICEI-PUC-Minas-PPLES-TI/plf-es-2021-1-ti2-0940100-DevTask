const router = require('express').Router()
const { authController } = require('../controllers')

router.get('/', (req, res) => {
  res.json([
    { name: 'Ana Clara', email: 'ana@aa.com' },
    { name: 'Ana CfdsAhgjkfdlara', email: 'ana@dfdfdfdaa.com' }
  ])
})
router.post('/login', authController.signin)
router.post('/logout', (req, res) => {
  res.send('Saindo')
})

module.exports.auth = router
