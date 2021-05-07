const { StatusCodes } = require('http-status-codes')
const { usersService } = require('../services')
const yup = require('yup')

module.exports = {
  list: async (req, res) => {
    try {
      const response = 'anoa'
      return res.status(StatusCodes.OK).json(response)
    } catch (error) {
      console.log(error)
      return res
        .status(error.status || StatusCodes.INTERNAL_SERVER_ERROR)
        .json(error.messages)
    }
  },
  register: async (req, res) => {
    try {
      const schema = yup.object().shape({
        name: yup.string().required(),
        cpf_cnpj: yup.string().required(),
        phone: yup.string().required(),
        email: yup.string().required().email(),
        password: yup.string().required()
      })

      await schema.validate(req.body, {
        stripUnknown: true
      })

      const response = await usersService.register(req)
      return res.status(StatusCodes.CREATED).json(response)
    } catch (error) {
      console.error(error)
      return res
        .send(error.message)
        .status(error.status || StatusCodes.INTERNAL_SERVER_ERROR)
        .json(error.message)
    }
  }
}
