const router = require('express').Router();
const { User, Role, Unit, WorkOrder } = require('../models');

// GET all units for the homepage
router.get('/', async (req, res) => {
  try {
    const allUnits = await Unit.findAll()

    const unitData = allUnits.map((unit) => unit.get({plain: true}))
   
    res.render('homepage', {unitData, loggedIn: req.session.loggedIn})
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET single unit by unit id
router.get('/unit/:id', async (req, res) => {
  try {
    const singleUnitdata = await Unit.findByPk(req.params.id);

    const singleUnit = singleUnitdata.get({plain: true});

    res.render('singleUnit', {...singleUnit, loggedIn: req.session.loggedIn});
  } catch (err) {
    console.log(err);
    res.status.json(err);
  }
});

// Login
router.get('/login', (req, res) => {
  if(req.session.loggedIn) {
    res.redirect('/dashboard')
  }
  res.render('login')
});

// Register
router.get('/register', (req, res) => {
  if(req.session.loggedIn) {
    res.redirect('/dashboard')
  }
  res.render('register')
});

module.exports = router;