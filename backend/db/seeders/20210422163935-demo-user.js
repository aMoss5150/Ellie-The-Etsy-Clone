'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('passy12'),
      },
      {
        email: faker.internet.email(),
        username: 'Carrol Shelby',
        hashedPassword: bcrypt.hashSync('passy12'),
      },
      {
        email: faker.internet.email(),
        username: 'Stirling Moss',
        hashedPassword: bcrypt.hashSync('passy12'),
      },
      {
        email: faker.internet.email(),
        username: 'Valentino Balboni',
        hashedPassword: bcrypt.hashSync('passy12'),
      },
      {
        email: faker.internet.email(),
        username: 'The Stig',
        hashedPassword: bcrypt.hashSync('passy12'),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users');
  }
};