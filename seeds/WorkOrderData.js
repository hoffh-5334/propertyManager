const { WorkOrder } = require('../models');

const WorkOrderData = [
  {
    priority: 'high',
    category: 'Plumbing',
    date_created: 'October 27, 2022',
    description: 'Kitchen sink is leaking from faucet',
    fulfilled: false,
    user_id: 1,
  },
  {
    priority: 'high',
    category: 'Plumbing',
    date_created: 'October 27, 2022',
    description: 'Kitchen sink is leaking from faucet',
    fulfilled: false,
    user_id: 1,
  },
  {
    priority: 'low',
    category: 'HVAC',
    date_created: 'October 23, 2022',
    description: 'Furnace filter needs to be changed',
    fulfilled: false,
    user_id: 2,
  },
  {
    priority: 'high',
    category: 'Electrical',
    date_created: 'October 25, 2022',
    description: 'No power in bedroom',
    fulfilled: false,
    user_id: 3,
  },

];

const seedWorkOrders = async () => await WorkOrder.bulkCreate(WorkOrderData);

module.exports = seedWorkOrders;
