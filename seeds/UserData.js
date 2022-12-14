const { User } = require('../models')

const UserData = [
    {
        name: "manager",
        email: 'manager@123.com',
        password: '123',
        admin: true,
        role_id: 1
    },
    {
        name: "John",
        email: 'john@yahoo.com',
        password: '123345678',
        role_id: 2
    },
    {
        name: 'David',
        email: 'dsmith@gmail.com',
        password: '87654321',
        role_id: 2
    },
    {
        name: 'Sarah',
        email: 'sarah@gmail.com',
        password: 'pass1234',
        role_id: 2
    },
    {
        name: 'Gary',
        email: 'garya@gmail.com',
        password: 'pass8765',
        role_id: 2
    }
]

const seedUser = async () => await User.bulkCreate(UserData, {
    individualHooks: true,
    returning: true,
});

module.exports = seedUser;
