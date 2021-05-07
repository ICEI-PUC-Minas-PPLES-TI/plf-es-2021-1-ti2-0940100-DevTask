const { Model, DataTypes, Sequelize } = require('sequelize')
const config = require('../config/database/database')

class Skills extends Model {}
Skills.init(
  {
    name: DataTypes.STRING,
    level: DataTypes.STRING
  },
  {
    sequelize: new Sequelize(config),
    modelName: 'Skills',
    tableName: 'skills',
    paranoid: true
  }
)

module.exports = Skills
