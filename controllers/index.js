const router = require('express').Router();
const homeRoutes = require('./home-routes');
const apiRoutes = require("./api");
const auth = require('../utils/auth')

router.use('/api', apiRoutes);
router.use('/', auth, homeRoutes);

module.exports = router;