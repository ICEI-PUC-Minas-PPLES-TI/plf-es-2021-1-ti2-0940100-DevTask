const authService = require('./auth')
const usersService = require('./users')
const clientService = require('./client')
const devFieldService = require('./devfield')
const devService = require('./dev')

module.exports = {
  authService,
  usersService,
  devService,
  devFieldService,
  clientService
}
