const router = require('express').Router();
const UserRoutes = require('./UserRoutes');
const WorkOrderRoutes = require('./WorkOrderRoutes');
const UnitRoutes = require('./UnitRoutes');

router.use('/Users', UserRoutes);
router.use('/WorkOrder', WorkOrderRoutes);
router.use('/Unit', UnitRoutes);

module.exports = router;