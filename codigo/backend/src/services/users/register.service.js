/* eslint-disable no-throw-literal */
const { StatusCodes } = require('http-status-codes')
const yup = require('yup')
const { usersRepository } = require('../../repositories')
const { messages } = require('../../utils')
const { Op } = require('sequelize')

module.exports.register = async (req) => {
  const schema = yup.object().shape({
    userType: yup.string().equals(['dev', 'client']).required(),
    name: yup.string().required(),
    cpfCnpj: yup.string().required().min(11).max(14),
    phone: yup.string().required().max(14),
    email: yup.string().email().required(),
    password: yup.string().required()
  })

  const validated = await schema.validate(req.body, {
    stripUnknown: true
  })

  // Depois pesquisar como fazer essa validação com o unique constraint com yup
  const user = await usersRepository.get({
    where: {
      [Op.or]: [
        { email: validated.email },
        { phone: validated.phone }
      ]
    },
    paranoid: false
  })

  if (user) {
    throw {
      status: StatusCodes.CONFLICT,
      message: messages.alreadyExists('email or phone')
    }
  }

  let role = false
  if (req.session && req.session.isAdmin) {
    role = true
  }

  const userCreated = await usersRepository.create({
    ...validated,
    admin: role
  })
  console.log(userCreated.firstName)

  return {
    id: userCreated.getDataValue('id'),
    userType: userCreated.getDataValue('userType'),
    name: userCreated.getDataValue('name'),
    firstName: userCreated.firstName,
    cpfCnpj: userCreated.getDataValue('cpfCnpj'),
    phone: userCreated.getDataValue('phone'),
    email: userCreated.getDataValue('email')
  }
}
