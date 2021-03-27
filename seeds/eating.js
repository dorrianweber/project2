const { Eating } = require('../models');

const eatingdata = [
      {
        food_name: 'Grand Slam',
        calories: '1500',
        meal_type: 'Breakfast',
        date_id: '3/27/21',
        user_id: '1'
      },
      {
        food_name: 'PopEyes chicken sandwhich',
        calories: '2000',
        meal_type: 'Lunch',
        date_id: '3/27/21',
        user_id: '1'
      },
      {
        food_name: '20oz Ribeye steak',
        calories: '2500',
        meal_type: 'Dinner',
        date_id: '3/27/21',
        user_id: '1'
      },
      {
        food_name: 'Veggie omellete',
        calories: '400',
        meal_type: 'Breakfast',
        date_id: '3/26/21',
        user_id: '1'
      },
      {
        food_name: 'Tuna sandwhich',
        calories: '450',
        meal_type: 'Lunch',
        date_id: '3/26/21',
        user_id: '1'
      },
      {
        food_name: 'Pasta with meatballs',
        calories: '700',
        meal_type: 'Dinner',
        date_id: '3/26/21',
        user_id: '1'
      },
      {
        food_name: 'Eggs and bacon',
        calories: '700',
        meal_type: 'Breakfast',
        date_id: '3/26/21',
        user_id: '2'
      },
      {
        food_name: 'Nachos Belgrande',
        calories: '1250',
        meal_type: 'Lunch',
        date_id: '3/26/21',
        user_id: '2'
      },
      {
        food_name: 'Chicken enchiladas',
        calories: '1000',
        meal_type: 'Dinner',
        date_id: '3/26/21',
        user_id: '2'
      },
      {
        food_name: 'Waffle',
        calories: '500',
        meal_type: 'Breakfast',
        date_id: '3/27/21',
        user_id: '2'
      },
      {
        food_name: 'Vietnamise beef noodle soup',
        calories: '850',
        meal_type: 'Lunch',
        date_id: '3/27/21',
        user_id: '2'
      },
      {
        food_name: 'Beef burrito',
        calories: '1100',
        meal_type: 'Dinner',
        date_id: '3/27/21',
        user_id: '2'
      },
    ];

const seedEating = () => Eating.bulkCreate(eatingdata);

module.exports = seedEating;