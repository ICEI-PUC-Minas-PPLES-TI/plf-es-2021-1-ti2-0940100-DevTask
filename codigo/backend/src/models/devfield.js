const { Model, DataTypes, Sequelize } = require('sequelize')
const config = require('../config/database/database')

class DevField extends Model {}
DevField.init(
  {
    name: DataTypes.STRING
  },
  {
    sequelize: new Sequelize(config),
    modelName: 'devField',
    tableName: 'dev_field'
  }
)

module.exports = DevField
