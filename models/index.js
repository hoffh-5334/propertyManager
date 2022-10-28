const User = require('./User');
const Role = require('./Role');
const WorkOrder = require('./WorkOrder');
const Unit = require('./Unit');
const Payment = require('./Payment');

// Relationships between models

// User has one role
Role.hasMany(User, {
  foreignKey: 'role_id',
  onDelete: 'SET NULL'

});

// User has one unit
User.hasOne(Unit, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

// User has many work orders
User.hasMany(WorkOrder, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

// User has many payments
User.hasMany(Payment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

// Units have many payments
// Unit.hasMany(Payment, {
//   foreignKey: 'unit_id'
// });

// Units have many payments
// Payment.belongsTo(Unit, {
//   foreignKey: 'unit_id'
// });

// WorkOrder.belongsTo(User,
//   { foreignKey: 'user_id' }
// )


module.exports = { User, Role, WorkOrder, Unit, Payment };



