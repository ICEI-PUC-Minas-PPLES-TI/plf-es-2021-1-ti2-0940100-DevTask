const { StatusCodes } = require('http-status-codes')
const { usersService } = require('../services')

module.exports = {
  get: async (req, res) => {
    try {
      const response = await usersService.get(req.params.id)
      return res.status(StatusCodes.OK).json(response)
    } catch (error) {
      console.log(error)
      return res
        .status(error.status || StatusCodes.INTERNAL_SERVER_ERROR)
        .json(error.messages)
    }
  },
  list: async (req, res) => {
    try {
      const response = await usersService.list(req)
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
      const response = await usersService.create(req)
      return res.status(StatusCodes.CREATED).json(response)
    } catch (error) {
      console.error(error)
      return res
        .send(error.message)
        .status(error.status || StatusCodes.INTERNAL_SERVER_ERROR)
        .json(error.message)
    }
  },
  update: async (req, res) => {
    try {
      const response = await usersService.update(req.params.id, req.body)
      return res.status(StatusCodes.OK).json(response)
    } catch (error) {
      console.error(error)
      return res
        .send(error.message)
        .status(error.status || StatusCodes.INTERNAL_SERVER_ERROR)
        .json(error.message)
    }
  },
  delete: async (req, res) => {
    try {
      const response = await usersService.deleteOne(req.params.id)
      return res.status(StatusCodes.OK).json(response)
    } catch (error) {
      console.error(error)
      return res
        .send(error.message)
        .status(error.status || StatusCodes.INTERNAL_SERVER_ERROR)
        .json(error.message)
    }
  },
}
