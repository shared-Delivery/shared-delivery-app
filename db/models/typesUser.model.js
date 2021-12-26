const { Model, DataTypes, Sequelize } = require('sequelize');

const TYPE_TABLE = 'TypeUser';

const TypeSchema = {
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

class UsersTypes extends Model {
  static associate() {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: TYPE_TABLE,
      modelName: 'UsersTypes',
      timestamp: false,
    };
  }
}

module.exports = { TYPE_TABLE, TypeSchema, UsersTypes };
