const Sequelize = require('sequelize')
const config = require('../config/database/database')
const User = require('./user')
const DevField = require('./devfield')
const Client = require('./client')
const Skills = require('./skills')
const Certificate = require('./certificates')
const Dev = require('./dev')

// ONE TO ONE RELATIONSHIP
User.hasOne(Client, {
  onDelete: 'RESTRICT',
  onUpdate: 'RESTRICT'
})
Client.belongsTo(User)

User.hasOne(Dev, {
  onDelete: 'RESTRICT',
  onUpdate: 'RESTRICT'
})
Dev.belongsTo(User)

// ONE TO MANY RELATIONSHIP
DevField.hasMany(Dev)
Dev.belongsTo(DevField)

Dev.hasMany(Skills)
Dev.hasMany(Certificate)

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
)

module.exports = {
  sequelize,
  User,
  DevField,
  Client,
  Skills,
  Certificate
}
