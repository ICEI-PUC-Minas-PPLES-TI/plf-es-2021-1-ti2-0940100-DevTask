/* eslint-disable no-throw-literal */
const { StatusCodes } = require('http-status-codes')
const { usersRepository } = require('../../repositories')
const { messages } = require('../../utils')

module.exports.register = async (req) => {
  const { name, cpf_cnpj, phone, email, password } = req.body
  const checkEmail = await usersRepository.get({ email })

  if (checkEmail) {
    throw {
      status: StatusCodes.CONFLICT,
      message: messages.alreadyExists('email')
    }
  }

  let role = false
  if (req.session && req.session.isAdmin) {
    role = true
  }

  return usersRepository.create({
    name,
    cpf_cnpj,
    phone,
    email,
    password,
    description: ' ',
    admin: false
  })
}
