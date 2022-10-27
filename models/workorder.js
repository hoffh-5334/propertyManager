const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class WorkOrder extends Model {}

WorkOrder.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    priority: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull:false,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    fulfilled: {
      type: DataTypes.BOOLEAN,
      allowNull:false,
    },
    unit_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'unit',
        key: 'id',
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'WorkOrder',
  }
);

module.exports = WorkOrder;
