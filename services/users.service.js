const faker = require('faker');
const router = require('../routes/users.router');

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
      });
  }

  showUsers() {
    return this.users;
  }

  async findOne(id) {
    return this.users.find((item) => item.id === id);
  }

  async delete(id) {
    const index = this.users.findIndex((item) => item.id === id);
    if (index === -1) {
      return {
        message: 'user not found',
      };
    }

    return this.users.splice(index, 1);
  }

  async update(id, body) {
    const index = this.users.findIndex((item) => item.id === id);
    if (index === -1) {
      return {
        message: 'user not found',
      };
    }
    const userSearch = this.users[index];
    this.users[index] = {
      ...userSearch,
      ...body,
    };
    return this.users[index];
  }
}

module.exports = UsersService;
