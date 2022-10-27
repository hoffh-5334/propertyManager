const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Role extends Model { }




Role.init(
    {

        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,

        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Role',
    }
);


module.exports = Role