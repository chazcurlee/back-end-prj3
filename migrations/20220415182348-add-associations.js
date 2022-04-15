'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.updateColumn(
      'posts',
      'teacher_id',
      {
        field: 'teacher_id',
      onDelete: 'CASCADE',
      references: {
        model: 'teachers',
        key: 'id'
      }
      }
    )
    await queryInterface.updateColumn(
      'comments',
      'post_id',
      {
        field: 'post_id',
      onDelete: 'CASCADE',
      references: {
        model: 'posts',
        key: 'id'
      }
      }
    )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
