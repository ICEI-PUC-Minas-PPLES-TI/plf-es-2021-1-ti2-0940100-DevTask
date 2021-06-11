const { StatusCodes } = require('http-status-codes')
const { devService } = require('../services')

module.exports = {
  update: async (req, res) => {
    try {
      const response = await devService.update(req.params.id, req.body)
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
