const { users } = require('./users.routes')
const { auth } = require('./auth.routes')
const { devfield } = require('./devfield.routes')
const { client } = require('./client.routes')
const { dev } = require('./dev.routes')

module.exports = {
  users,
  auth,
  devfield,
  dev,
  client
}
