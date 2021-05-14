const { Skills } = require('../models')

module.exports = {
  list: (query) => Skills.findAndCountAll(query),
  get: (query) => Skills.findOne(query),
  create: (params) => Skills.create(params),
  update: (skills) => skills.save(),
  destroy: (id) => Skills.destroy({ where: { id } })
}
