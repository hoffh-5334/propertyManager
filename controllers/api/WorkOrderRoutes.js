const router = require('express').Router();
const { WorkOrder } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const newWorkOrder = await WorkOrder.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newWorkOrder);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const WorkOrderData = await WorkOrder.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!WorkOrderData) {
      res.status(404).json({ message: 'No work order found with this id!' });
      return;
    }

    res.status(200).json(WorkOrderData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
