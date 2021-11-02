const faker = require('faker');
const boom = require('@hapi/boom');

class UsersService {
  constructor() {
    this.users = [];
    this.generateUser();
  }

  generateUser() {
    for (let i = 0; i < 8; i++)
      this.users.push({
        id: faker.datatype.uuid(),
        name: faker.name.findName(),
        email: faker.internet.email(),
        isBlocked: faker.datatype.boolean(),
      });
  }

  showUsers() {
    return this.users;
  }

  async findOne(id) {
    const user = this.users.find((item) => item.id === id);
    if (!user) {
      throw boom.notFound('Product not found');
    }
    return user;
  }

  async delete(id) {
    const index = this.users.findIndex((item) => item.id === id);
    if (index === -1) {
      throw boom.notFound('product not found');
    }

    return this.users.splice(index, 1);
  }

  async update(id, body) {
    const index = this.users.findIndex((item) => item.id === id);
    if (index === -1) {
      throw boom.notFound('product not found');
    }
    const userSearch = this.users[index];
    this.users[index] = {
      ...userSearch,
      ...body,
    };
    return this.users[index];
  }

  async addUser(body) {
    this.users.push({
      id: faker.datatype.uuid(),
      ...body,
      isBlocked: faker.datatype.boolean(),
    });
    return this.users[this.users.length - 1];
  }
}

module.exports = UsersService;
