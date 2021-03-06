const { Model, DataTypes, Sequelize } = require('sequelize');
// const {Service} = require('./service.model')
const COMPANY_TABLE = 'companies';

const CompanySchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },

  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'update_at',
    defaultValue: Sequelize.NOW,
  },
};

class Company extends Model {
  static associate(models) {
    this.hasMany(models.Service, {
      as: 'service',
      foreignKey: 'companyId',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: COMPANY_TABLE,
      modelName: 'Company',
      timestamp: false,
    };
  }
}

module.exports = { COMPANY_TABLE, CompanySchema, Company };
