const { StatusCodes } = require('http-status-codes')
const { usersRepository } = require('../../repositories')
const { messages } = require('../../utils')

module.exports.get = async (id) => {
    const user = await usersRepository.get({
        attributes: { 
            exclude: ['admin', 'createdAt','updatedAt', 'deletedAt'] 
        },
        where: {
          id,
        },
      });
    
      if (!user) {
        throw {
          status: StatusCodes.NOT_FOUND,
          message: messages.notFound('user'),
        };
      }
    
      return user;
  };