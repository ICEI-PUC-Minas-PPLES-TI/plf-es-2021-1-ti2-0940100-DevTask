/* eslint-disable no-throw-literal */
const { StatusCodes } = require('http-status-codes')
const yup = require('yup')
const { devRepository } = require('../../repositories')
const { messages } = require('../../utils')

module.exports.update = async (id, body) => {
  const dev = await devRepository.getById(id)

  if (!dev) {
    throw {
      status: StatusCodes.NOT_FOUND,
      message: messages.notFound('dev')
    }
  }

  const regexUrl = /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/

  const schema = yup.object().shape({
    bio: yup.string(),
    github: yup.string().url().matches(
      regexUrl,
      'Enter correct url!'
    ),
    linkedin: yup.string().url().matches(
      regexUrl,
      'Enter correct url!'
    ),
    portifolio: yup.string().url().matches(
      regexUrl,
      'Enter correct url!'
    )
  })

  const validated = await schema.validate(body, {
    stripUnknown: true
  })

  Object.keys(validated).forEach((key) => {
    dev.setDataValue(key, validated[key])
  })

  const devUpdated = await devRepository.update(dev)

  return {
    id: devUpdated.getDataValue('id'),
    userId: devUpdated.getDataValue('userId'),
    bio: devUpdated.getDataValue('bio'),
    github: devUpdated.getDataValue('github'),
    linkedin: devUpdated.getDataValue('linkedin'),
    website: devUpdated.getDataValue('website')
  }
}
