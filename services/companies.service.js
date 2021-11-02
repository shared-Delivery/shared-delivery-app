const faker = require('faker');
const boom = require('@hapi/boom');

class CompaniesServices {
  constructor() {
    this.companies = [];
    this.generateCompanies();
  }

  generateCompanies() {
    for (let index = 0; index < 6; index++) {
      this.companies.push({
        id: faker.datatype.uuid(),
        name: faker.company.companyName().toUpperCase(),
        address: faker.address.direction(),
      });
    }
  }

  returnCompanies() {
    return this.companies;
  }

  async getCompaniesId(id) {
    return this.companies.find((item) => item.id === id);
  }

  async deleteCompany(id) {
    const index = this.companies.findIndex((item) => item.id === id);
    if (index === -1) {
      throw boom.notFound('Product not found');
    }
    return this.companies.splice(index, 1);
  }

  async createCompany(body) {
    const newCompany = {
      id: faker.datatype.uuid(),
      ...body,
    };
    this.companies.push(newCompany);
    return newCompany;
  }

  async update(id, body) {
    const index = this.companies.findIndex((item) => item.id === id);
    if (index === -1) {
      throw boom.notFound('Product not found');
    }
    const company = this.companies[index];
    this.companies[index] = {
      ...company,
      ...body,
    };
    return this.companies[index];
  }
}

module.exports = CompaniesServices;
