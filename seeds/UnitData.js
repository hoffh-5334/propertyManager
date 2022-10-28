const { Unit } = require('../models');


const UnitData = [
  {
    "name": "Single Bed",
    "lease_start_date": "10/1/2022",
    "date_available": "10/1/2023",
    "description": "Home to just 26 1-bedroom apartments life at 1524 La Salle pairs modern convenience and classic Minneapolis brownstone charm on the edge of Downtown and Uptown in Loring Park. All floorplans feature stainless steel appliances (gas stoves and dishwashers), quartz countertops, hardwood floors, and hand tiled bathroom surrounds. Walking distance to a TON of restaurants, coffee shops, and stores, you'll love calling 1524 La Salle home - and let's not forget Loring Park just around the corner!",
    "room_num": 1001,
    "occupied": true,
    "floor": 1,
    "bed": 1,
    "bath ": 1,
    "sqft": 450,
    "rent_cost": 900.00,
    "user_id": 1
  },
  {
    "name": "Two Bedroom",
    "lease_start_date": "10/1/2022",
    "date_available": "10/1/2023",
    "description": "Willows Edge Commons is where home options and an amazing lifestyle meet. Located north of Dawley Farm Village, our homes are located near premier shopping, dining, entertainment and employment on the East side of Sioux Falls while having open space nearby.Our community features home options including one through three-bedroom townhomes and apartments. Enjoy the fresh air on your home's patio or deck or take in some sun poolside. Get a workout in quickly and easily in our fitness center located on the property. Start your all-inclusive lifestyle at Willows Edge Commons by scheduling a tour today!",
    "room_num": 1002,
    "occupied": true,
    "floor": 1,
    "bed": 2,
    "bath ": 2,
    "sqft": 906,
    "rent_cost": 1079.00,
    "user_id": 2
  },
  {
    "name": "Single Bed",
    "lease_start_date": "10/1/2022",
    "date_available": "10/1/2023",
    "description": "Willows Edge Commons is where home options and an amazing lifestyle meet. Located north of Dawley Farm Village, our homes are located near premier shopping, dining, entertainment and employment on the East side of Sioux Falls while having open space nearby.Our community features home options including one through three-bedroom townhomes and apartments. Enjoy the fresh air on your home's patio or deck or take in some sun poolside. Get a workout in quickly and easily in our fitness center located on the property. Start your all-inclusive lifestyle at Willows Edge Commons by scheduling a tour today!",
    "room_num": 1003,
    "occupied": true,
    "floor": 1,
    "bed": 1,
    "bath ": 2,
    "sqft": 800,
    "rent_cost": 1000.00,
    "user_id": 3
  },
  {
    "name": "Two Bed",
    "lease_start_date": "10/1/2022",
    "date_available": "10/1/2023",
    "description": "Willows Edge Commons is where home options and an amazing lifestyle meet. Located north of Dawley Farm Village, our homes are located near premier shopping, dining, entertainment and employment on the East side of Sioux Falls while having open space nearby.Our community features home options including one through three-bedroom townhomes and apartments. Enjoy the fresh air on your home's patio or deck or take in some sun poolside. Get a workout in quickly and easily in our fitness center located on the property. Start your all-inclusive lifestyle at Willows Edge Commons by scheduling a tour today!",
    "room_num": 1004,
    "occupied": true,
    "floor": 1,
    "bed": 2,
    "bath ": 1,
    "sqft": 1200,
    "rent_cost": 1500.00,
    "user_id": 4
  },
  {
    "name": "Two Bed",
    "lease_start_date": "10/1/2022",
    "date_available": "10/1/2023",
    "description": "Willows Edge Commons is where home options and an amazing lifestyle meet. Located north of Dawley Farm Village, our homes are located near premier shopping, dining, entertainment and employment on the East side of Sioux Falls while having open space nearby.Our community features home options including one through three-bedroom townhomes and apartments. Enjoy the fresh air on your home's patio or deck or take in some sun poolside. Get a workout in quickly and easily in our fitness center located on the property. Start your all-inclusive lifestyle at Willows Edge Commons by scheduling a tour today!",
    "room_num": 1005,
    "occupied": false,
    "floor": 1,
    "bed": 2,
    "bath ": 2,
    "sqft": 906,
    "rent_cost": 1400.00,
    "user_id": null
  },
  {
    "name": "Two Bed",
    "lease_start_date": "10/1/2022",
    "date_available": "10/1/2023",
    "description": "Willows Edge Commons is where home options and an amazing lifestyle meet. Located north of Dawley Farm Village, our homes are located near premier shopping, dining, entertainment and employment on the East side of Sioux Falls while having open space nearby.Our community features home options including one through three-bedroom townhomes and apartments. Enjoy the fresh air on your home's patio or deck or take in some sun poolside. Get a workout in quickly and easily in our fitness center located on the property. Start your all-inclusive lifestyle at Willows Edge Commons by scheduling a tour today!",
    "room_num": 1006,
    "occupied": false,
    "floor": 1,
    "bed": 2,
    "bath ": 2,
    "sqft": 906,
    "rent_cost": 1300.00,
    "user_id": null
  },
  {
    "name": "Two Bed",
    "lease_start_date": "10/1/2022",
    "date_available": "10/1/2023",
    "description": "Willows Edge Commons is where home options and an amazing lifestyle meet. Located north of Dawley Farm Village, our homes are located near premier shopping, dining, entertainment and employment on the East side of Sioux Falls while having open space nearby.Our community features home options including one through three-bedroom townhomes and apartments. Enjoy the fresh air on your home's patio or deck or take in some sun poolside. Get a workout in quickly and easily in our fitness center located on the property. Start your all-inclusive lifestyle at Willows Edge Commons by scheduling a tour today!",
    "room_num": 1007,
    "occupied": false,
    "floor": 1,
    "bed": 2,
    "bath ": 2,
    "sqft": 1200,
    "rent_cost": 1500.00,
    "user_id": null
  }
]

const seedUnit = async () => await Unit.bulkCreate(UnitData);

module.exports = seedUnit;
