const router = require('express').Router();

const homeRoutes = require('./home-routes');
const dashRoutes = require('./dashboard-routes');
const apiRoutes = require("./api");

router.use('/api', apiRoutes);
router.use('/dashboard', dashRoutes);
router.use('/', homeRoutes);

module.exports = router;