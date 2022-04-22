'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TeacherReply extends Model {

    static associate(models) {

    }
  }
  TeacherReply.init({
    teacher_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'teacher_id',
      onDelete: 'CASCADE',
      references: {
        model: 'teachers',
        key: 'id'
      }
    },
    reply_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'reply_id',
      onDelete: 'CASCADE',
      references: {
        model: 'replies',
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'TeacherReply',
    tableName: 'teacherreplies'
  });
  return TeacherReply;
};