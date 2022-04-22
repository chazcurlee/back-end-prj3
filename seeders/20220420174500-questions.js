'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'questions',
      [
        {
          user_id: 1,
          title: 'I am so out of shape!',
          content: 'What can I do to get back in shape?'
        },
        {
          user_id: 2,
          title: 'I\'m such a negative person!',
          content: 'What are some things I can do daily to become more positive?'
        },
        {
          user_id: 3,
          title: 'I can\'t find time to cook a healthy meal.',
          content: 'What should I do if I can\'t find time to cook healthy meals but still want to eat healthy?'
        }
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('questions', null, {})
  }
};