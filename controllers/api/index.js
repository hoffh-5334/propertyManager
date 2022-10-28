const router = require('express').Router();
const UserRoutes = require('./UserRoutes');
const WorkOrderRoutes = require('./WorkOrderRoutes');
const UnitRoutes = require('./UnitRoutes');
const PaymentRoutes = require('./PaymentRoutes');

router.use('/Users', UserRoutes);
router.use('/WorkOrder', WorkOrderRoutes);
router.use('/Unit', UnitRoutes);
router.use('/Payment', PaymentRoutes);

module.exports = router;