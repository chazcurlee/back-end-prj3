'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TeacherReply extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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