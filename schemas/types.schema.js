const Joi = require('joi');
const id = Joi.string();
const name = Joi.string().min(3).max(25);

const createTypeSchema = Joi.object({
  // name: name.required(),
  name: name.required(),
});

const updateTypeSchema = Joi.object({
  id: id,
  name: name.required(),
});

const getTypeSchema = Joi.object({
  id: id.required(),
});

const deleteTypeSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createTypeSchema,
  updateTypeSchema,
  getTypeSchema,
  deleteTypeSchema,
};
