const { Model, DataTypes, Sequelize } = require('sequelize')
const config = require('../config/database/sequelize')

class Dev extends Model {}
Dev.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      field: 'user_id'
    },
    title: DataTypes.STRING,
    bio: DataTypes.STRING,
    location: DataTypes.STRING,
    languages: DataTypes.STRING,
    contact: DataTypes.STRING,
    website: DataTypes.STRING,
    linkedin: DataTypes.STRING,
    github: DataTypes.STRING
  },
  {
    sequelize: new Sequelize(config),
    modelName: 'Dev',
    tableName: 'devs',
    paranoid: true
  }
)

module.exports = Dev
