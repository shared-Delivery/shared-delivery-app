const { User, UserSchema } = require('./user.model');
const { Company, CompanySchema } = require('./company.model');
const { Service, ServiceSchema } = require('./service.model');
function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Company.init(CompanySchema, Company.config(sequelize));
  Service.init(ServiceSchema, Service.config(sequelize));
}

module.exports = setupModels;
