const express = require('express');
const router = express.Router();
const UsersService = require('../services/users.service');

const allUser = new UsersService();

router.get('/', (req, res) => {
  const users = allUser.showUsers();
  res.status(200).json(users);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const findUserId = await allUser.findOne(id);
  res.json(findUserId);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deleteUser = await allUser.delete(id);
  res.json(deleteUser);
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const userUpdate = await allUser.update(id, body);
  res.json(userUpdate);
});

module.exports = router;
