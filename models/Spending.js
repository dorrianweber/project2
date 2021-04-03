const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class Spending extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Spending.init(
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
        type: DataTypes.STRING,
        allowNull: true,
    },
    coffeeSpent: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    barSpent: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id"
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "spending",
  }
);

module.exports = Spending;













