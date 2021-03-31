const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class Eating extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Eating.init(
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
    food_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    meal_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    calories: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    protein: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    carbs: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    fat: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "eating",
  }
);

module.exports = Eating;