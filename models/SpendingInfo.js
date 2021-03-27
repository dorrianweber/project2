const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class SpendingInfo extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

SpendingInfo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // Check out this validation (convert to standard format using Moment??)
        isDate: true,
      },
    },
    restaurantSpent: {
        type: DataTypes.DECIMAL,
        allowNull: true,
    },
    coffeeSpent: {
        type: DataTypes.DECIMAL,
        allowNull: true,
    },
    barSpent: {
        type: DataTypes.DECIMAL,
        allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "eatinginfo",
  }
);

module.exports = SpendingInfo;













