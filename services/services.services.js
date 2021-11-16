const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class Services {
  constructor() {}

  async showServices() {
    const rta = await models.Service.findAll();
    return rta;
  }

  async getServiceId(id) {
    const service = await models.Service.findByPk(id);
    if (!service) {
      throw boom.notFound('user not found');
    }
    return service;
  }

  async addServices(body) {
    const newService = await models.Service.create(body);
    return newService;
  }

  async deleteService(id) {
    const user = await models.Service.findByPk(id);
    await user.destroy();
    return { id };
  }

  async updateService(id, body) {
    const service = await models.Service.findByPk(id);

    service.update(body);
    return service;
  }
}

module.exports = Services;
