const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Payments extends Model { }



Payments.init(

    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        amount: {
            type: DataTypes.DECIMAL,
            allowNull: false,

        },
        paid: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        unit_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'unit',
                key: 'id',
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',

    }
);

module.exports = Payments
