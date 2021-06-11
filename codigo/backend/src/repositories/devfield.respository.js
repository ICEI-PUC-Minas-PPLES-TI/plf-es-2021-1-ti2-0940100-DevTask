const { DevField } = require('../models')

module.exports = {
  list: (query) => DevField.findAndCountAll(query),
  getById: (id) => DevField.findByPk(id),
  get: (query) => DevField.findOne(query),
  create: (params) => DevField.create(params)
}
