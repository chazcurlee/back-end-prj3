'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('posts', 'title', {
      type: Sequelize.STRING,
      allowNull: false
    })
    await queryInterface.changeColumn(
      'teachers',
      'createdAt',
        {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: new Date()
        }
      
    )
    await queryInterface.changeColumn(
      'posts',
      'createdAt',
      
        {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: new Date()
        }
      
    )
    await queryInterface.changeColumn(
      'comments',
      'createdAt',
      
        {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: new Date()
        }
      
    )
    await queryInterface.changeColumn(
      'teachers',
      'updatedAt',
      
        {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: new Date()
        }
      
    )
    await queryInterface.changeColumn(
      'posts',
      'updatedAt',
      
        {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: new Date()
        }
      
    )
    await queryInterface.changeColumn(
      'comments',
      'updatedAt',
      
        {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: new Date()
        }
      
    )
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
    await queryInterface.removeColumn('posts', 'title')
    
    await queryInterface.removeColumn(
      'posts',
      'createdAt'
    )
    await queryInterface.removeColumn(
      'posts',
      'content'
    )

  }
};

