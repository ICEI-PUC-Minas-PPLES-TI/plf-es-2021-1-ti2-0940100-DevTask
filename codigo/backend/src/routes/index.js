const { users } = require('./users.routes')
const { auth } = require('./auth.routes')
const { devfield } = require('./devfield.routes')
const { client } = require('./client.routes')


module.exports = {
  users,
  auth,
  devfield,
  client
}
