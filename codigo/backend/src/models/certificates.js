const { Model, DataTypes, Sequelize } = require('sequelize')
const config = require('../config/database/database')

class Certificate extends Model {}
Certificate.init(
  {
    title: DataTypes.STRING,
    institution: DataTypes.STRING,
    date: DataTypes.DATE
  },
  {
    sequelize: new Sequelize(config),
    modelName: 'Certificate',
    tableName: 'certificates',
  }
)

module.exports = Certificate
