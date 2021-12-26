const { User, UserSchema } = require('./user.model');
const { Company, CompanySchema } = require('./company.model');
const { Service, ServiceSchema } = require('./service.model');
const { UsersTypes, TypeSchema } = require('./typesUser.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Company.init(CompanySchema, Company.config(sequelize));
  Service.init(ServiceSchema, Service.config(sequelize));
  UsersTypes.init(TypeSchema, UsersTypes.config(sequelize));

  Company.associate(sequelize.models);
  Service.associate(sequelize.models);
}

module.exports = setupModels;
