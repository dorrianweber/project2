const router = require('express').Router();
const { Sleeping } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newSleep = await Sleeping.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newSleep);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/', withAuth, async (req, res) => {
  try {
    const sleepData = await Sleeping.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });
    res.status(200).json(sleepData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

