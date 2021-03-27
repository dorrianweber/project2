const { Sleeping } = require('../models');

const sleepingdata = [
  {
    sleeping_hours: '5',
    date_id: '3/27/21',
    user_id: '1'
  },
  {
    sleeping_hours: '6',
    date_id: '3/26/21',
    user_id: '1'
  },
  {
    sleeping_hours: '9',
    date_id: '3/27/21',
    user_id: '2'
  },
  {
    sleeping_hours: '8',
    date_id: '3/26/21',
    user_id: '2'
  },{
    sleeping_hours: '6.5',
    date_id: '3/27/21',
    user_id: '3'
  },
  {
    sleeping_hours: '6',
    date_id: '3/26/21',
    user_id: '3'
  },
  {
    sleeping_hours: '3',
    date_id: '3/27/21',
    user_id: '4'
  },
  {
    sleeping_hours: '4',
    date_id: '3/26/21',
    user_id: '4'
  },
];

const seedSleeping = () => Sleeping.bulkCreate(sleepingdata);

module.exports = seedSleeping;
