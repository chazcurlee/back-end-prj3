'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'replies',
      [
        {
          question_id: 1,
          content:'You need to exercise everyday!'
        },
        {
          question_id: 2,
          content: 'Learn to embrace your flaws and mistakes.'
        },
        {
          question_id: 3,
          content:'There is nothing you can do...sorry'
        }
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('replies', null, {})
  }
};