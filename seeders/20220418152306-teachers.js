'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'teachers',
      [
        {
          firstName: 'Bob',
          lastName: 'Bobson',
          username: 'bobbobson',
          email: 'bobbobson@gmail.com',
          password: 'bobbobson123',
          experience: 'I have a lot of experience',
          about: 'My name is Bob',
          image: ''
        },
        {
          firstName: 'Will',
          lastName: 'Willson',
          username: 'WillWillson',
          email: 'WillWillson@gmail.com',
          password: 'WillWillson123',
          experience: 'I have a lot of experience',
          about: 'My name is Will',
          image: ''
        },
        {
          firstName: 'Sam',
          lastName: 'Samson',
          username: 'SamSamson',
          email: 'SamSamson@gmail.com',
          password: 'SamSamson123',
          experience: 'I have a lot of experience',
          about: 'My name is Sam',
          image: ''
        }
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('teachers', null, {})
  }
};
