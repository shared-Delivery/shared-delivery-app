const express = require('express');
const router = express.Router();
const Services = require('../services/services.services');

const validatorHandler = require('../middlewares/validatorhandler');
const {
  createServiceSchema,
  getServiceSchema,
  updateServiceSchema,
  deleteServiceSchema,
} = require('../schemas/services.schema');

const allServices = new Services();

router.get('/', async (req, res, next) => {
  try {
    const service = await allServices.showServices();
    res.json(service);
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:id',
  validatorHandler(getServiceSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const serviceId = await allServices.getServiceId(id);
      res.json(serviceId);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  validatorHandler(createServiceSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newService = await allServices.addServices(body);
      res.json(newService);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  '/:id',
  validatorHandler(updateServiceSchema, 'params'),
  validatorHandler(updateServiceSchema, 'body'),

  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const update = await allServices.updateService(id, body);
      res.json(update);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  validatorHandler(deleteServiceSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const service = await allServices.deleteService(id);
      res.json(service);
    } catch (error) {
      next(error);
    }
  }
);
module.exports = router;
