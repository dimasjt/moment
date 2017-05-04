import Joi from 'joi';

exports.register = {
  body: {
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    name: Joi.string().required(),
  },
};
