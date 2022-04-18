'use strict';

module.exports = {
 up:  async (queryInterface, Sequelize) => {
    
  await queryInterface.renameColumn(
    'teachers',
    'password',
    'passwordDigest'
  )



  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.renameColumn(
      'teachers',
      'passwordDigest',
      'password'
    )
    
}}
