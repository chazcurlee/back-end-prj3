'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn(
      'teachers',
      'username',
        {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        }
    )

    await queryInterface.changeColumn(
      'teachers',
      'email',
        {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
          validate: {
            isEmail: true
          }
        }
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn(
      'teachers',
      'username',
        {
          type: Sequelize.STRING,
          allowNull: false,
        }
    )
  }
};
