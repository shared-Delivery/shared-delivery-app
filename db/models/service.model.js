const { Model, DataTypes, Sequelize } = require('sequelize');
const { COMPANY_TABLE } = require('./company.model');
const USER_TABLE = 'services';

const ServiceSchema = {
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
  description: {
    allowNull: false,
    type: DataTypes.STRING,
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
  companyId: {
    field: 'company_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: COMPANY_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
};

class Service extends Model {
  static associate(models) {
    this.belongsTo(models.Company, { as: 'company' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'Service',
      timestamp: false,
    };
  }
}

module.exports = { USER_TABLE, ServiceSchema, Service };
