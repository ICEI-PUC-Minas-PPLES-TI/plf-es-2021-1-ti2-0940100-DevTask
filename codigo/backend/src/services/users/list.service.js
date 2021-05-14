const { StatusCodes } = require('http-status-codes')
const { usersRepository } = require('../../repositories')
const { messages } = require('../../utils');

module.exports.list = async () => {
    const { count, rows } = await usersRepository.list({ attributes: { exclude: ['admin', 'createdAt','updatedAt', 'deletedAt'] }});
  
    if (count === 0) {
      throw {
        status: StatusCodes.NOT_FOUND,
        message: messages.notFound('users'),
      };
    }
  
    return {
      metadata: {
        total: count,
      },
      data: rows,
    };
  };