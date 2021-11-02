const express = require('express');
const router = express.Router();
const companies = require('../services/companies.service');
const validatorHandler = require('../middlewares/validatorhandler');
const {
  createCompanySchema,
  updateCompanySchema,
  findCompanySchema,
  deleteCompanySchema,
} = require('../schemas/companies.schema');
const companiesServices = new companies();

router.get('/', (req, res, next) => {
  try {
    const allCompanies = companiesServices.returnCompanies();
    res.status(200).json(allCompanies);
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:id',
  validatorHandler(findCompanySchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const CompanyId = await companiesServices.getCompaniesId(id);
      res.status(200).json(CompanyId);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  validatorHandler(deleteCompanySchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const deleteCompany = await companiesServices.deleteCompany(id);
      res.json(deleteCompany);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  '/:id',
  validatorHandler(updateCompanySchema, 'params'),
  validatorHandler(updateCompanySchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const updateCompany = await companiesServices.update(id, body);
      res.json(updateCompany);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  validatorHandler(createCompanySchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const companyNew = await companiesServices.createCompany(body);
      res.json(companyNew);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
