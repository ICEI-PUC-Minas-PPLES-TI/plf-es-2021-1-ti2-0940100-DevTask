const { Dev } = require('../models')

module.exports = {
  getById: (id) => Dev.findByPk(id),
  get: (query) => Dev.findOne(query),
  create: (params) => Dev.create(params),
  update: (dev) => dev.save()
}
