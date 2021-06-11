const { Model, DataTypes, Sequelize } = require('sequelize')
const config = require('../config/database/database')
const User = require('./user')

class Client extends Model {}
Client.init(
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
    linkedin: DataTypes.STRING,
    website: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING
  },
  {
    sequelize: new Sequelize(config),
    modelName: 'Client',
    tableName: 'clients',
    paranoid: true
  }
)

module.exports = Client
