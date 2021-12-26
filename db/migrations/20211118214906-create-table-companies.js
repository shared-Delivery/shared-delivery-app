'use strict';
const { CompanySchema, COMPANY_TABLE } = require('./../models/company.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(COMPANY_TABLE, CompanySchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(COMPANY_TABLE, CompanySchema);
  },
};
