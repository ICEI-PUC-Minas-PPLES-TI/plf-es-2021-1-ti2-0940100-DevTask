/* eslint-disable no-throw-literal */
const { StatusCodes } = require('http-status-codes')
const { usersRepository } = require('../../repositories')
const { messages } = require('../../utils')

module.exports.deleteOne = async (id) => {
  const user = await usersRepository.getById(id)

  if (!user) {
    throw {
      status: StatusCodes.NOT_FOUND,
      message: messages.notFound('user')
    }
  }
  const userDeleted = await usersRepository.destroy(user.getDataValue('id'))
  if (userDeleted) {
    return messages.sucess('user-deleted')
  };
}
