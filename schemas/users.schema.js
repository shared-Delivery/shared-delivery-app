const Joi = require('joi');
const id = Joi.string();
const name = Joi.string().min(3).max(25);
const email = Joi.string().min(12).max(25);
const password = Joi.string().min(6).max(25);

const createUserSchema = Joi.object({
  // name: name.required(),
  email: email.required(),
  password: password.required(),
});

const updateUserSchema = Joi.object({
  id: id,
  email: email,
  password: password,
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
