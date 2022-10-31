const router = require('express').Router();
const auth = require('../utils/auth')

const { User, Role, Unit, WorkOrder } = require('../models');

// Only allow logged-in users access to dashboard
router.use(auth);

router.get('/', async (req, res) => {
    try {
        let userData;
        let data;
        // Replace userId and admin with values from cookie
        let userId = req.session.user_id;

        if (req.session.admin) {
            console.log("is admin")
            userData = await User.findAll({
                attributes: ['id', 'name', 'email', 'admin', 'role_id'],
                include: [
                    {
                        model: WorkOrder,
                        attribtes: ['id', 'pririty', 'category', 'description', 'fuffiled'],
                    }
                ]
            });
            // console.log(userData)
            data = userData.map((item) => item.get({ plain: true }));
            // console.log(data)
            res.render('dashboard', { data, admin })
        } else {
            userData = await User.findOne({
                where: { id: userId },
                attributes: ['id', 'name', 'email', 'admin', 'role_id'],
                include: {
                    model: WorkOrder,
                    attribtes: ['id', 'pririty', 'category', 'description', 'fuffiled'],
                },
                order: [[{ model: WorkOrder }, 'date_created', 'DESC']]
            });
            data = userData.get({ plain: true });
            res.render('dashboard', { data })
        }
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
});

module.exports = router;