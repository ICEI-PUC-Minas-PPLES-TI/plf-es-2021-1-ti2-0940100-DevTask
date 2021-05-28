const usersRepository = require('./user.repository')
const devsRepository = require('./dev.repository')
const resetTokenRepository = require('./resettoken.repository')
const categoriesRepository = require('./category.repository')
const projectsRepository = require('./project.repository')

module.exports = {
  usersRepository,
  devsRepository,
  resetTokenRepository,
  categoriesRepository,
  projectsRepository
}
