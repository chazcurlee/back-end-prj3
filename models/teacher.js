'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Teacher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Teacher.hasMany(models.Post, {
        foreignKey: 'teacher_id',
        as: 'teacher',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Teacher.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    passwordDigest: {
      type: DataTypes.STRING,
      allowNull: false
    },
    experience: {
      type: DataTypes.STRING,
      allowNull: true
    },
    about: {
      type: DataTypes.STRING,
      allowNull: true
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    },
  }, {
    sequelize,
    modelName: 'Teacher',
    tableName: 'teachers'
  });
  return Teacher;
};