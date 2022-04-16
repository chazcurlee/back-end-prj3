'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'comments',
      [
        {
          post_id: 9,
          name: 'Claire',
          content: 'I love this yoga pose!'
        },
        {
          post_id: 10,
          name: 'Harry',
          content: 'Thank you for sharing this!'
        },
        {
          post_id: 11,
          name: 'Mark',
          content: 'Such an intense workout!'
        },
        {
          post_id: 11,
          name: 'Emma',
          content: 'I was sooooo sore the day after!'
        },
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('comments', null, {})
  }
};
