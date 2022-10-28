const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Unit extends Model { }

Unit.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lease_start_date: {
            type: DataTypes.DATE,
            allowNull: true
        },
        date_available: {
            type: DataTypes.DATE,
            allowNull: true
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        room_num: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
        },
        occupied: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        floor: {
            type: DataTypes.INTEGER,
            validate: {
                isNumeric: true,
            },
        },
        bed: {
            type: DataTypes.INTEGER,
            validate: {
                isNumeric: true,
            },
        },
        bath: {
            type: DataTypes.INTEGER,
            validate: {
                isNumeric: true,
            },
        },
        sqft: {
            type: DataTypes.INTEGER,
            validate: {
                isNumeric: true,
            },
        },
        rent_cost: {
            type: DataTypes.DECIMAL,
            validate: {
                isNumeric: true,
            },
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'User',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Unit',
    }

);

module.exports = Unit