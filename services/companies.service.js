const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class CompaniesServices {
  constructor() {
    this.companies = [];
    // this.generateCompanies();
  }

  // generateCompanies() {
  //   for (let index = 0; index < 6; index++) {
  //     this.companies.push({
  //       id: faker.datatype.uuid(),
  //       name: faker.company.companyName().toUpperCase(),
  //       address: faker.address.direction(),
  //     });
  //   }
  // }

  async returnCompanies() {
    const rta = await models.Company.findAll();
    return rta;
  }

  async getCompaniesId(id) {
    const company = await models.Company.findByPk(id);
    if (!company) {
      throw boom.notFound('user not found');
    }
    return company;
  }

  async deleteCompany(id) {
    const user = await models.Company.findByPk(id);
    await user.destroy();
    return { id };
  }

  async createCompany(body) {
    const newUser = await models.Company.create(body);
    return newUser;
  }

  async update(id, body) {
    const user = await models.Company.findByPk(id);

    user.update(body);
    return user;
  }
}
module.exports = CompaniesServices;
