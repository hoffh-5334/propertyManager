const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Payment extends Model { }

Payment.init(

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
                model: 'User',
                key: 'id',
            },
        },
        // unit_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: 'Unit',
        //         key: 'id',
        //     },
        // }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Payment',
    }
);

module.exports = Payment



// test