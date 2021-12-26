'use strict';
const { TypeSchema, TYPE_TABLE } = require('./../models/typesUser.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(TYPE_TABLE, TypeSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(TYPE_TABLE, TypeSchema);
  },
};
