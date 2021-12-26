'use strict';
const { ServiceSchema, USER_TABLE } = require('./../models/service.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(USER_TABLE, ServiceSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(USER_TABLE, ServiceSchema);
  },
};
