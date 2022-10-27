const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class workOrder extends Model {}

Project.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull:false,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    fulfilled: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    unit_id: {
      type: DataTypes.BOOLEAN,
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
    modelName: 'workOrder',
  }
);

module.exports = workOrder;
