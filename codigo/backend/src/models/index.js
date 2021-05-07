const Sequelize = require('sequelize')
const config = require('../config/database/database')
const User = require('./user')
const devField = require('./devfield')

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
)

module.exports = {
  sequelize,
  User,
  devField
}
