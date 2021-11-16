// const faker = require('faker');
// const boom = require('@hapi/boom');
// const getConnection = require('../libs/postgres');
const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class UsersService {
  constructor() {
    // this.users = [];
    // this.generateUser();
  }

  // async generateUser(data) {
  //   // for (let i = 0; i < 8; i++)
  //   //   this.users.push({
  //   //     id: faker.datatype.uuid(),
  //   //     name: faker.name.findName(),
  //   //     email: faker.internet.email(),
  //   //     isBlocked: faker.datatype.boolean(),
  //   //   });
  //   return data;
  //}

  async showUsers() {
    const rta = await models.User.findAll();
    return rta;
  }

  async findOne(id) {
    // const user = this.users.find((item) => item.id === id);
    // if (!user) {
    //   throw boom.notFound('Product not found');
    // }
    // return user;
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('user not found');
    }
    return user;
  }

  async delete(id) {
    // const index = this.users.findIndex((item) => item.id === id);
    // if (index === -1) {
    //   throw boom.notFound('product not found');
    // }
    // return this.users.splice(index, 1);
    const user = await models.User.findByPk(id);
    await user.destroy();
    return { id };
  }

  async updateUser(id, body) {
    // const index = this.users.findIndex((item) => item.id === id);
    // if (index === -1) {
    //   throw boom.notFound('product not found');
    // }
    // const userSearch = this.users[index];
    // this.users[index] = {
    //   ...userSearch,
    //   ...body,
    // };
    // return this.users[index];
    const user = await models.User.findByPk(id);

    user.update(body);
    return user;
  }

  async addUser(body) {
    //   this.users.push({
    //     id: faker.datatype.uuid(),
    //     ...body,
    //     isBlocked: faker.datatype.boolean(),
    //   });
    //   return this.users[this.users.length - 1];
    // }
    const newUser = await models.User.create(body);
    return newUser;
  }
}

module.exports = UsersService;
