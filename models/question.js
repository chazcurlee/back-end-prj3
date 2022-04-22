'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {

    static associate(models) {

      Question.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }),
      Question.hasMany(models.Reply, {
        foreignKey: 'question_id',
        as: 'replies',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Question.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id',
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Question',
    tableName: 'questions'
  });
  return Question;
};