const router = require('express').Router();
const { Spending } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newSpend = await Spending.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newSpend);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/', withAuth, async (req, res) => {
  try {
    const spendData = await Spending.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });
    res.status(200).json(spendData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
