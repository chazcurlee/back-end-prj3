'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn(
      'posts',
      'teacher_id',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'teacher_id',
        onDelete: 'CASCADE',
        references: {
        model: 'teachers',
        key: 'id'
      }
      }
    )
    await queryInterface.changeColumn(
      'comments',
      'post_id',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'post_id',
        onDelete: 'CASCADE',
        references: {
        model: 'posts',
        key: 'id'
      }
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      'posts',
      'teacher_id'
    )
  }
};
