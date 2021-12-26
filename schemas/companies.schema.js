const Joi = require('joi');

const id = Joi.string();
const name = Joi.string().min(3).max(25);

const createCompanySchema = Joi.object({
  name: name.required(),
});

const updateCompanySchema = Joi.object({
  id: id,
  name: name,
});

const findCompanySchema = Joi.object({
  id: id,
});

const deleteCompanySchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createCompanySchema,
  updateCompanySchema,
  findCompanySchema,
  deleteCompanySchema,
};
