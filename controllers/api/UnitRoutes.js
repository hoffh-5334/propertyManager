const router = require('express').Router();
const { Unit } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const newUnit = await Unit.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newUnit);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const UnitData = await Unit.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!UnitData) {
      res.status(404).json({ message: 'No unit found with this id!' });
      return;
    }

    res.status(200).json(UnitData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
