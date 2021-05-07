const { users } = require('./users.routes')
const { auth } = require('./auth.routes')
const { devfield } = require('./devfield.routes')

module.exports = {
  users,
  auth,
  devfield
}
