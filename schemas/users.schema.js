const Joi = require('joi');
const id = Joi.string().uuid();
const name = Joi.string().min(3).max(25);
const email = Joi.string().min(12).max(25).email();

const createUserSchema = Joi.object({
  name: name.required(),
  email: email.required(),
});

const updateUserSchema = Joi.object({
  name: name,
  email: email,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

const deleteUserSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createUserSchema,
  updateUserSchema,
  getUserSchema,
  deleteUserSchema,
};
