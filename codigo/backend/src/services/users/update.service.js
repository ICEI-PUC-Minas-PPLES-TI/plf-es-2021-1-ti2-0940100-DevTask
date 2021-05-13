/* eslint-disable no-throw-literal */
const { StatusCodes } = require('http-status-codes')
const yup = require('yup')
const { usersRepository } = require('../../repositories')
const { messages } = require('../../utils')

module.exports.update = async (id, body) => {
  const user = await usersRepository.get({
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

  const schema = yup.object().shape({
    userType: yup.string().equals(['dev', 'client']),
    name: yup.string(),
    cpfCnpj: yup.string().min(11).max(14),
    phone: yup.string().max(14),
    email: yup.string().email(),
    password: yup.string()
  });

  const validated = await schema.validate(body, {
    stripUnknown: true,
  });

  Object.keys(validated).forEach((key) => {
    user.setDataValue(key, validated[key]);
  });

  const userUpdated = await usersRepository.update(user);

  return {
    id: userUpdated.getDataValue('id'),
    userType: userUpdated.getDataValue('userType'),
    name: userUpdated.getDataValue('name'),
    firstName: userUpdated.firstName,
    cpfCnpj: userUpdated.getDataValue('cpfCnpj'),
    phone: userUpdated.getDataValue('phone'),
    email: userUpdated.getDataValue('email')
  };
};