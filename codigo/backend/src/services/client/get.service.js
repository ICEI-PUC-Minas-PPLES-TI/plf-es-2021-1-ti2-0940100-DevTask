/* eslint-disable no-throw-literal */
const { StatusCodes } = require('http-status-codes')
const { usersRepository, clientRepository } = require('../../repositories')
const { messages } = require('../../utils')

module.exports.get = async (id) => {
  const client = await clientRepository.get({
    attributes: {
      exclude: ['createdAt', 'updatedAt', 'deletedAt']
    },
    where: {
      id
    }
  })
  const userId = client.getDataValue('userId')
  const user = await usersRepository.get({
    attributes: {
      exclude: ['admin', 'createdAt', 'updatedAt', 'deletedAt']
    },
    where: {
      id: userId
    }
  })

  if (!client || !user) {
    throw {
      status: StatusCodes.NOT_FOUND,
      message: messages.notFound('user')
    }
  }
  const clientFullData = { ...client.dataValues, ...user.dataValues }

  return clientFullData
}
