const { Model, DataTypes, Sequelize } = require('sequelize')
const config = require('../config/database/database')
const { encryptor } = require('../utils')

class User extends Model {}
User.init(
  {
    userType: {
      type: DataTypes.STRING,
      field: 'user_type'
    },
    name: DataTypes.STRING,
    firstName: {
      type: DataTypes.VIRTUAL,
      get () {
        const firstName = this.name.split(' ')[0]
        return firstName
      },
      set (value) {
        throw new Error('Do not try to set the `firstName` value!')
      }
    },
    cpfCnpj: {
      type: DataTypes.STRING(14),
      field: 'cpf_cnpj'
    },
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    admin: DataTypes.BOOLEAN
  },
  {
    sequelize: new Sequelize(config),
    modelName: 'User',
    tableName: 'users',
    paranoid: true
  }
)

User.beforeSave(async (user, options) => {
  const password = await encryptor.hashPassword(user.password)
  if (user.changed('password')) {
    Object.assign(user, { password })
  }
  return user
})

User.prototype.toJSON = function () {
  const user = { ...this.get() }
  return Object.fromEntries(
    Object.entries(user).filter(([key]) => !['password'].includes(key))
  )
}

module.exports = User
