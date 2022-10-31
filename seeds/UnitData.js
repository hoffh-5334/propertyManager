const { Unit } = require('../models');


const UnitData = [
  {
    "name": "One Bedroom",
    "lease_start_date": "10/1/2022",
    "date_available": "10/1/2023",
    "description": "Home to just 26 1 and 2-bedroom apartments, life at MMHD Residences pairs modern convenience and classic Minneapolis brownstone charm on the edge of Downtown and Uptown in Loring Park. All floorplans feature stainless steel appliances (gas stoves and dishwashers), quartz countertops, hardwood floors, and hand tiled bathroom surrounds. Walking distance to a TON of restaurants, coffee shops, and stores, you'll love calling MMHD Residences home - and let's not forget Loring Park is just around the corner!",
    "room_num": 1001,
    "occupied": true,
    "floor": 1,
    "bed": 1,
    "bath": 1,
    "sqft": 450,
    "rent_cost": 900.00,
    "user_id": 1,
    "floor_plan": "/images/floor-plan-4.png"
  },
  {
    "name": "Two Bedroom",
    "lease_start_date": "10/1/2022",
    "date_available": "10/1/2023",
    "description": "Home to just 26 1 and 2-bedroom apartments, life at MMHD Residences pairs modern convenience and classic Minneapolis brownstone charm on the edge of Downtown and Uptown in Loring Park. All floorplans feature stainless steel appliances (gas stoves and dishwashers), quartz countertops, hardwood floors, and hand tiled bathroom surrounds. Walking distance to a TON of restaurants, coffee shops, and stores, you'll love calling MMHD Residences home - and let's not forget Loring Park is just around the corner!",
    "room_num": 1002,
    "occupied": true,
    "floor": 1,
    "bed": 2,
    "bath": 2,
    "sqft": 906,
    "rent_cost": 1079.00,
    "user_id": 2,
    "floor_plan": "/images/floor-plan-1.png"
  },
  {
    "name": "One Bedroom",
    "lease_start_date": "10/1/2022",
    "date_available": "10/1/2023",
    "description": "Home to just 26 1 and 2-bedroom apartments, life at MMHD Residences pairs modern convenience and classic Minneapolis brownstone charm on the edge of Downtown and Uptown in Loring Park. All floorplans feature stainless steel appliances (gas stoves and dishwashers), quartz countertops, hardwood floors, and hand tiled bathroom surrounds. Walking distance to a TON of restaurants, coffee shops, and stores, you'll love calling MMHD Residences home - and let's not forget Loring Park is just around the corner!",
    "room_num": 1003,
    "occupied": true,
    "floor": 1,
    "bed": 1,
    "bath": 2,
    "sqft": 800,
    "rent_cost": 1000.00,
    "user_id": 3,
    "floor_plan": "/images/floor-plan-3.png"
  },
  {
    "name": "Two Bedroom Plus Den",
    "lease_start_date": "10/1/2022",
    "date_available": "10/1/2023",
    "description": "Home to just 26 1 and 2-bedroom apartments, life at MMHD Residences pairs modern convenience and classic Minneapolis brownstone charm on the edge of Downtown and Uptown in Loring Park. All floorplans feature stainless steel appliances (gas stoves and dishwashers), quartz countertops, hardwood floors, and hand tiled bathroom surrounds. Walking distance to a TON of restaurants, coffee shops, and stores, you'll love calling MMHD Residences home - and let's not forget Loring Park is just around the corner!",
    "room_num": 1004,
    "occupied": true,
    "floor": 1,
    "bed": 2,
    "bath": 2,
    "sqft": 1200,
    "rent_cost": 1500.00,
    "user_id": 4,
    "floor_plan": "/images/floor-plan-2.png"
  },
  {
    "name": "Two Bedroom",
    "lease_start_date": "10/1/2022",
    "date_available": "10/1/2023",
    "description": "Home to just 26 1 and 2-bedroom apartments, life at MMHD Residences pairs modern convenience and classic Minneapolis brownstone charm on the edge of Downtown and Uptown in Loring Park. All floorplans feature stainless steel appliances (gas stoves and dishwashers), quartz countertops, hardwood floors, and hand tiled bathroom surrounds. Walking distance to a TON of restaurants, coffee shops, and stores, you'll love calling MMHD Residences home - and let's not forget Loring Park is just around the corner!",
    "room_num": 1005,
    "occupied": false,
    "floor": 1,
    "bed": 2,
    "bath": 1,
    "sqft": 906,
    "rent_cost": 1400.00,
    "user_id": null,
    "floor_plan": "/images/floor-plan-1.png"
  },
  {
    "name": "Two Bedroom",
    "lease_start_date": "10/1/2022",
    "date_available": "10/1/2023",
    "description": "Home to just 26 1 and 2-bedroom apartments, life at MMHD Residences pairs modern convenience and classic Minneapolis brownstone charm on the edge of Downtown and Uptown in Loring Park. All floorplans feature stainless steel appliances (gas stoves and dishwashers), quartz countertops, hardwood floors, and hand tiled bathroom surrounds. Walking distance to a TON of restaurants, coffee shops, and stores, you'll love calling MMHD Residences home - and let's not forget Loring Park is just around the corner!",
    "room_num": 1006,
    "occupied": false,
    "floor": 1,
    "bed": 2,
    "bath": 2,
    "sqft": 906,
    "rent_cost": 1300.00,
    "user_id": null,
    "floor_plan": "/images/floor-plan-2.png"
  },
  {
    "name": "Two Bedroom Plus Den",
    "lease_start_date": "10/1/2022",
    "date_available": "10/1/2023",
    "description": "Home to just 26 1 and 2-bedroom apartments, life at MMHD Residences pairs modern convenience and classic Minneapolis brownstone charm on the edge of Downtown and Uptown in Loring Park. All floorplans feature stainless steel appliances (gas stoves and dishwashers), quartz countertops, hardwood floors, and hand tiled bathroom surrounds. Walking distance to a TON of restaurants, coffee shops, and stores, you'll love calling MMHD Residences home - and let's not forget Loring Park is just around the corner!",
    "room_num": 1007,
    "occupied": false,
    "floor": 1,
    "bed": 2,
    "bath": 2,
    "sqft": 1200,
    "rent_cost": 1500.00,
    "user_id": null,
    "floor_plan": "/images/floor-plan-1.png"
  }
]

const seedUnit = async () => await Unit.bulkCreate(UnitData);

module.exports = seedUnit;
