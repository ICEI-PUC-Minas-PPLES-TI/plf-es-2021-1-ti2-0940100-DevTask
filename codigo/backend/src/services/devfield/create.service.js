const yup = require('yup')
const { devFieldRepository } = require('../../repositories')

module.exports.create = async (req) => {
  const schema = yup.object().shape({
    name: yup.string().required()
  })

  const validated = await schema.validate(req.body, {
    stripUnknown: true
  })

  const fieldCreated = await devFieldRepository.create(validated)

  return {
    id: fieldCreated.getDataValue('id'),
    name: fieldCreated.getDataValue('name')
  }
}
