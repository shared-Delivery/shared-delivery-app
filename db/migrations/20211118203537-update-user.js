'use strict';
// codigo para modificar una entidad añadiendole una columna

const { UserSchema, USER_TABLE } = require('./../models/user.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.addColumn(USER_TABLE, 'updateAt', UserSchema.updateAt);
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn(USER_TABLE, 'updateAt');
  },
};
