const { Role } = require('../models');


const RoleData = [
    {
        title: "Manager"
    },
    {
        title: "Tenant"
    },
]

const seedRole = async () => await Role.bulkCreate(RoleData);

module.exports = seedRole;
