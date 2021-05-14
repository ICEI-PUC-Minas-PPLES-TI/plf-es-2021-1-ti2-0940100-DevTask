const { StatusCodes } = require('http-status-codes')
const { devFieldService } = require('../services')

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
  create: async (req, res) => {
    try {
      const response = await devFieldService.create(req)
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
