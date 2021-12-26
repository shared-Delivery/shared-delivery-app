const express = require('express');
const router = express.Router();
const UserTypes = require('../services/userTypes.service');
const validatorHandler = require('../middlewares/validatorhandler');
const {
  createTypeSchema,
  updateTypeSchema,
  getTypeSchema,
  deleteTypeSchema,
} = require('../schemas/types.schema');

const userType = new UserTypes();

router.get('/', async (req, res, next) => {
  try {
    const type = await userType.showUsers();
    res.status(200).json(type);
  } catch (error) {
    next(error);
  }
});
router.post(
  '/',
  validatorHandler(createTypeSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const type = await userType.addUser(body);
    res.status(201).json(type);
  }
);

router.get(
  '/:id',
  validatorHandler(getTypeSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const findUserId = await userType.findOne(id);
      res.json(findUserId);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  validatorHandler(deleteTypeSchema, 'params'),
  async (req, res) => {
    const { id } = req.params;
    const deleteUser = await userType.delete(id);
    res.json(deleteUser);
  }
);

router.patch(
  '/:id',
  validatorHandler(updateTypeSchema, 'params'),
  validatorHandler(updateTypeSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const userUpdate = await userType.updateUser(id, body);
      res.json(userUpdate);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
