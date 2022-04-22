'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {

    static associate(models) {

      Post.belongsTo(models.Teacher, {
        foreignKey: 'teacher_id',
        as: 'teacher',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }),

      Post.hasMany(models.Comment, {
        foreignKey: 'post_id',
        as: 'post',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Post.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tag: {
      type: DataTypes.STRING,
      allowNull: false
    },
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
    image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Post',
    tableName: 'posts'
  });
  return Post;
};