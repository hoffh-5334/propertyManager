const {WorkOrder} = require ('../models');

const WorkOrderData = [
  {
    priority: 'High',
    category: 'Plumbing',
    date_created: 'October 27, 2022',
    description: 'Kitchen sink is leaking from faucet',
    fulfilled: false, 
    unit_id: 2, 
    user_id: 2,
  },
  
  {
    priority: 'low',
    category: 'HVAC',
    date_created: 'October 23, 2022',
    description: 'Furnace filter needs to be changed',
    fulfilled: false, 
    unit_id: 1, 
    user_id: 1,
  },
  {
    priority: 'high',
    category: 'Electrical',
    date_created: 'October 25, 2022',
    description: 'No power in bedroom',
    fulfilled: true, 
    unit_id: 5, 
    user_id: 5,
  },
  
];

const seedWorkOrders = () => WorkOrder.bulkCreate(WorkOrderData);

module.exports = seedWorkOrders;
