const { auth } = require('./auth.routes')
const { user } = require('./user.routes')
const { dev } = require('./dev.routes')
const { category } = require('./category.routes')
const { project } = require('./project.routes')

module.exports = {
  auth,
  user,
  dev,
  category,
  project
}
