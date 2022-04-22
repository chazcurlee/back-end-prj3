'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reply extends Model {

    static associate(models) {

      Reply.belongsTo(models.Question, {
        foreignKey: 'question_id',
        as: 'replies',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Reply.init({
    question_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'question_id',
      onDelete: 'CASCADE',
      references: {
        model: 'questions',
        key: 'id'
      }
    },
    content: {
      type:DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Reply',
    tableName: 'replies'
  });
  return Reply;
};