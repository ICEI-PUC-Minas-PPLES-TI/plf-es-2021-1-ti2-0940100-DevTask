/* eslint-disable no-throw-literal */
const { StatusCodes } = require('http-status-codes')
const { messages } = require('../utils')

module.exports = async (req, res, next) => {
  try {
    if (!req.session.isAdmin) {
      throw {
        status: StatusCodes.UNAUTHORIZED,
        message: messages.authMissing
      }
    }
    return next()
  } catch (error) {
    console.error(error)
    return res.status(error.status).json(error.message)
  }
}
