const { User } = require('../models')

module.exports = {
  list: (query) => User.findAndCountAll(query),
  getById: (id) => User.findByPk(id),
  get: (query) => User.findOne(query),
  create: (params) => User.create(params),
  update: (user) => user.save(),
  destroy: (id) => User.destroy({ where: { id } })
}
