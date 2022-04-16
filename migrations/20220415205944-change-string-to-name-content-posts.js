'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn(
      'posts',
      'content',
      {
        type: Sequelize.TEXT,
        allowNull: false
      }

    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      'posts',
      'content'
    )
  }
};
