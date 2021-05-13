/* eslint-disable no-throw-literal */
const { StatusCodes } = require('http-status-codes')
const yup = require('yup')
const { clientRepository } = require('../../repositories')
const { messages } = require('../../utils');

module.exports.update = async (id, body) => {
  const client = await clientRepository.getById(id);

  if (!client) {
    throw {
      status: StatusCodes.NOT_FOUND,
      message: messages.notFound('client'),
    };
  }

  const schema = yup.object().shape({
    bio: yup.string(),
    linkedin: yup.string().url().matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        'Enter correct url!'
    ),
    website: yup.string().url().matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        'Enter correct url!'
    ),
    city: yup.string(),
    state: yup.string()
  });

  const validated = await schema.validate(body, {
    stripUnknown: true,
  });

  Object.keys(validated).forEach((key) => {
    client.setDataValue(key, validated[key]);
  });

  const clientUpdated = await clientRepository.update(client);

  return {
    id: clientUpdated.getDataValue('id'),
    userId: clientUpdated.getDataValue('userId'),
    bio: clientUpdated.getDataValue('bio'),
    linkedin: clientUpdated.getDataValue('linkedin'),
    website: clientUpdated.getDataValue('website'),
    state: clientUpdated.getDataValue('state')
  };
};