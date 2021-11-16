const express = require('express');
const router = express.Router();
const UsersService = require('../services/users.service');
const validatorHandler = require('../middlewares/validatorhandler');
const {
  createUserSchema,
  updateUserSchema,
  deleteUserSchema,
  getUserSchema,
} = require('../schemas/users.schema');

const allUser = new UsersService();

router.get('/', async (req, res, next) => {
  try {
    const users = await allUser.showUsers();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
});
router.post(
  '/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newUser = await allUser.addUser(body);
    res.status(201).json(newUser);
  }
);

router.get(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const findUserId = await allUser.findOne(id);
      res.json(findUserId);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  validatorHandler(deleteUserSchema, 'params'),
  async (req, res) => {
    const { id } = req.params;
    const deleteUser = await allUser.delete(id);
    res.json(deleteUser);
  }
);

router.patch(
  '/:id',
  validatorHandler(updateUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const userUpdate = await allUser.updateUser(id, body);
      res.json(userUpdate);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
