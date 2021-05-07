const { devField } = require('../models')

module.exports = {
  list: (query) => devField.findAndCountAll(query),
  getById: (id) => devField.findByPk(id),
  get: (query) => devField.findOne(query),
  create: (params) => devField.create(params)
}
