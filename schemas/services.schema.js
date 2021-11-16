const Joi = require('joi');
const id = Joi.string();
const name = Joi.string().min(3).max(25);
const description = Joi.string().min(6).max(150);

const createServiceSchema = Joi.object({
  // name: name.required(),
  name: name.required(),
  description: description.required(),
});

const updateServiceSchema = Joi.object({
  id: id,
  name: name,
  description: description,
});

const getServiceSchema = Joi.object({
  id: id.required(),
});

const deleteServiceSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createServiceSchema,
  updateServiceSchema,
  getServiceSchema,
  deleteServiceSchema,
};
