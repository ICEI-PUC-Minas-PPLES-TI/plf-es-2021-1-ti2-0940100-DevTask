const { StatusCodes } = require('http-status-codes')
const jwt = require('jsonwebtoken')
const { encryptor, messages } = require('../../utils')
const { usersRepository } = require('../../repositories')
const { promisify } = require('util')
require('dotenv')

module.exports.signin = async (email, password) => {
  const user = await usersRepository.get({ email })

  if (!user) {
    throw {
      status: StatusCodes.NOT_FOUND,
      message: messages.notFound('user')
    }
  }

  const valid = await encryptor.comparePassword(password, user.password)
  if (!valid) {
    throw {
      status: StatusCodes.UNAUTHORIZED,
      message: messages.invalidPassword
    }
  }

  const payload = {
    id: user.id,
    email: user.email,
    admin: user.admin
  }

  const sign = promisify(jwt.sign)
  const token = await sign(payload, process.env.JWT_SECRET)

  return { email, token }
}
