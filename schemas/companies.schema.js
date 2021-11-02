const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(25);
const address = Joi.string().min(10).max(25);

const createCompanySchema = Joi.object({
  name: name.required(),
  address: address.required(),
});

const updateCompanySchema = Joi.object({
  id: id,
  name: name,
  address: address,
});

const findCompanySchema = Joi.object({
  id: id.required(),
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
