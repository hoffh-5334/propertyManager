const sequelize = require('../config/connection');
const { User, Unit, Role, Payment, WorkOrder } = require('../models');

const seedUser = require('./UserData');
const seedUnit = require('./UnitData');
const seedRole = require('./RoleData');
const seedWorkOrders = require('./WorkOrderData');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await seedRole();
    await seedUser();
    await seedUnit();
    await seedWorkOrders();

    process.exit(0);
};

seedDatabase();