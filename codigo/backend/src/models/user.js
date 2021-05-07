'use strict'
const { encryptor } = require('../utils')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      cpf_cnpj: {
        type: DataTypes.STRING(14),
        field: 'cpf_cnpj'
      },
      phone: DataTypes.STRING,
      description: DataTypes.TEXT,
      admin: DataTypes.BOOLEAN,
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at'
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at'
      },
      deletedAt: {
        type: DataTypes.DATE,
        field: 'deleted_at'
      }
    },
    {
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
  return User
}
