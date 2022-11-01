const router = require('express').Router();
const auth = require('../utils/auth')

const { User, Role, Unit, WorkOrder } = require('../models');

// Only allow logged-in users access to dashboard
// router.use(auth);

router.get('/', auth , async (req, res) => {
    try {
        let userData;
        let data;
        let userId = req.session.user_id;

        if (req.session.admin) {

            userData = await WorkOrder.findAll({
                attributes: ['id', 'date_created', 'priority', 'category', 'description', 'fulfilled', 'user_id'],
                include: [{ model: User, include: { model: Unit } }],
                order: [['date_created', 'DESC']]
            });
            data = userData.map((item) => item.get({ plain: true }));
            res.render('dashboard', { data, admin: req.session.admin, loggedIn: req.session.loggedIn })

        } else {
            userData = await User.findOne({
                where: { id: userId },
                attributes: ['id', 'name', 'email', 'admin', 'role_id'],
                include: {
                    model: WorkOrder,
                    attributes: ['id', 'priority', 'category', 'description', 'fulfilled'],
                },
                order: [[{ model: WorkOrder }, 'date_created', 'DESC']]
            });
            data = userData.get({ plain: true });
            res.render('dashboard', { data, loggedIn: req.session.loggedIn })
        }
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
});

module.exports = router;