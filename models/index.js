const User = require('./User');
const Role = require('./role2');
const WorkOrder = require('./workorder2');
const Unit = require('./Unit');
const Payment = require('./Payment');

// Relationships between models

// User has one role
User.hasOne(Role, {
  foreignKey: 'role_id'
});

// User has one unit
User.hasOne(Unit, {
  foreignKey: 'user_id'
});

// User has many work orders
User.hasMany(WorkOrder, {
  foreignKey: 'user_id'
});

// User has many payments
User.hasMany(Payment, {
  foreignKey: 'user_id'
});

// Units have many work orders
Unit.hasMany(WorkOrder, {
  foreignKey: 'unit_id'
});

// Units have many payments
Unit.hasMany(Payment, {
  foreignKey: 'unit_id'
});

module.exports = { User, Role, WorkOrder, Unit, Payment };



