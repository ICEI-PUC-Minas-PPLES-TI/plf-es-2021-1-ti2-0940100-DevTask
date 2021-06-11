const { Client } = require('../models')

module.exports = {
    getById: (id) => Client.findByPk(id),
    get: (query) => Client.findOne(query),
    create: (params) => Client.create(params),
    update: (client) => client.save(),
  }