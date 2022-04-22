'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Teacher extends Model {

    static associate(models) {

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
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
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