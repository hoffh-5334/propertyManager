const router = require('express').Router();
const UserRoutes = require('./UserRoutes');
const WorkOrderRoutes = require('./WorkOrderRoutes');
const UnitRoutes = require('./UnitRoutes');

router.use('/users', UserRoutes);
router.use('/workorder', WorkOrderRoutes);
router.use('/unit', UnitRoutes);

module.exports = router;