const Sequelize = require('sequelize')
const config = require('../config/database/sequelize')
const User = require('./user')
const Role = require('./role')
const Dev = require('./dev')
const ResetToken = require('./resettoken')
const Category = require('./category')
const Project = require('./project')

Role.hasMany(User)
User.hasOne(Role)
Dev.belongsTo(User)

Dev.hasMany(Project)
Project.belongsTo(Category)

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
)

module.exports = {
  sequelize,
  User,
  Role,
  Dev,
  ResetToken,
  Category,
  Project
}
