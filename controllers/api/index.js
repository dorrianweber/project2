const router = require('express').Router();
const userRoutes = require('./userRoutes');
const eatingRoutes = require('./eatingRoutes');
const sleepingRoutes = require('./sleepingRoutes');
const spendingRoutes = require('./spendingRoutes');

router.use('/users', userRoutes);
router.use('/eating', eatingRoutes);
router.use('/sleeping', sleepingRoutes);
router.use('/spending', spendingRoutes);

module.exports = router;