const { Model, DataTypes, Sequelize } = require('sequelize')
const config = require('../config/database/database')
const User = require('./user')

class Dev extends Model {}
Dev.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id'
      }
    },
    bio: DataTypes.TEXT,
    github: DataTypes.STRING,
    linkedin: DataTypes.STRING,
    portifolio: DataTypes.STRING
  },
  {
    sequelize: new Sequelize(config),
    modelName: 'Dev',
    tableName: 'devs',
    paranoid: true
  }
)

module.exports = Dev
