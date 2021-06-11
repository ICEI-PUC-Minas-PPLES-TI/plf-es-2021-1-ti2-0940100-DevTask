const { StatusCodes } = require('http-status-codes')
const { clientService } = require('../services')

module.exports = {
  update: async (req, res) => {
    try {
      const response = await clientService.update(req.params.id, req.body)
      return res.status(StatusCodes.OK).json(response)
    } catch (error) {
      console.error(error)
      return res
        .send(error.message)
        .status(error.status || StatusCodes.INTERNAL_SERVER_ERROR)
        .json(error.message)
    }
  },
  get: async (req, res) => {
    try {
      const response = await clientService.get(req.params.id)
      return res.status(StatusCodes.OK).json(response)
    } catch (error) {
      console.error(error)
      return res
        .send(error.message)
        .status(error.status || StatusCodes.INTERNAL_SERVER_ERROR)
        .json(error.message)
    }
  }
}
