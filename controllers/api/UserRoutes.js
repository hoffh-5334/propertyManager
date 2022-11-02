const router = require('express').Router();
const { User } = require('../../models');

// creating a new user
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.loggedIn = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// user log in 
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    // if  email entered is incorrect
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Invalid email or password, please try again' });
      return;
    }
    // if password entered is incorrect
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    // correct login 
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.loggedIn = true;
      console.log(userData.admin)
      if (userData.admin === true) {
        req.session.admin = true
      }

      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

//  user log out 
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
