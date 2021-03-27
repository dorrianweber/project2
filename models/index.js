const User = require('./User');
const EatingInfo = require('./EatingInfo');
const SleepingInfo = require('./SleepingInfo');
const SpendingInfo = require('./SpendingInfo');

// EatingInfo relationships
User.hasMany(EatingInfo, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

EatingInfo.belongsTo(User, {
    foreignKey: 'user_id',
});

// SleepingInfo relationships
User.hasMany(SleepingInfo, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

SleepingInfo.belongsTo(User, {
    foreignKey: 'user_id',
});

// SpendingInfo relationships
User.hasMany(SpendingInfo, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

SpendingInfo.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, EatingInfo, SleepingInfo, SpendingInfo };