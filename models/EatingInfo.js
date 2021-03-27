const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class EatingInfo extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

EatingInfo.init(
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
    calories: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    protein: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    carbs: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    fat: {
        type: DataTypes.INTEGER,
        allowNull: false,
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

module.exports = EatingInfo;