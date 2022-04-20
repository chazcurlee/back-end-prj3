'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reply extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Reply.belongsTo(models.Question, {
        foreignKey: 'question_id',
        as: 'question',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }),
      Reply.belongsToMany(models.Teacher, {
        through: models.TeacherReply,
        as: 'reply',
        foreignKey: 'reply_id'
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
    content: DataTypes.TEXT,
    allowNull: false
  }, {
    sequelize,
    modelName: 'Reply',
    tableName: 'replies'
  });
  return Reply;
};