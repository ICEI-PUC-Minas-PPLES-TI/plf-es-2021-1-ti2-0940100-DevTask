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
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
})
Client.belongsTo(User)

User.hasOne(Dev, {
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
})
Dev.belongsTo(User)

// ONE TO MANY RELATIONSHIP
DevField.hasMany(Dev, {
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
})
Dev.belongsTo(DevField)

Dev.hasMany(Skills), {
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
}
Dev.hasMany(Certificate), {
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
}

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
  Dev,
  Client,
  Skills,
  Certificate
}
