'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Ran Kim',
          email: 'ran@email.com'
        },
        {
          name: 'Harry Potter',
          email: 'harry@email.com'
        },
        {
          name: 'Milk Duds',
          email: 'milkduds@email.com'
        }
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {})
  }
};
