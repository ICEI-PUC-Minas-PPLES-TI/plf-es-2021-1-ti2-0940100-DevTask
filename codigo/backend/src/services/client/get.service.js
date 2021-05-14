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
  const user = await usersRepository.get({
    attributes: {
      exclude: ['admin', 'createdAt', 'updatedAt', 'deletedAt']
    },
    where: `${client.getDataValue('userId')}`
  })

  if (!client || !user) {
    throw {
      status: StatusCodes.NOT_FOUND,
      message: messages.notFound('user')
    }
  }

  return client + user
}
