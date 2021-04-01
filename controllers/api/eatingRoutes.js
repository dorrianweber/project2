const router = require('express').Router();
const { Eating } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newEat = await Eating.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newEat);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/', withAuth, async (req, res) => {
  try {
    const eatData = await Eating.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });
    res.status(200).json(eatData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
