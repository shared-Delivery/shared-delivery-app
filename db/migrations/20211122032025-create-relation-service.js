'use strict';
const { CompanySchema, COMPANY_TABLE } = require('./../models/company.model');
const { ServiceSchema, USER_TABLE } = require('./../models/service.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(COMPANY_TABLE, CompanySchema);
    await queryInterface.createTable(USER_TABLE, ServiceSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(COMPANY_TABLE, CompanySchema);
    await queryInterface.dropTable(USER_TABLE, ServiceSchema);
  },
};
