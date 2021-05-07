const { Model, DataTypes, Sequelize } = require('sequelize')
const config = require('../config/database/database')

class devField extends Model {}
devField.init(
  {
    name: DataTypes.STRING
  },
  {
    sequelize: new Sequelize(config),
    modelName: 'devField',
    tableName: 'dev_field'
  }
)

module.exports = devField
