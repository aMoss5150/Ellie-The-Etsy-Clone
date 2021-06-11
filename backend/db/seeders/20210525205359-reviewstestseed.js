'use strict';

  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [{
      description: 'Test Review 1',
      user_id: 1,
      product_id: 1,
      username: 'Valentino Balboni'
    },
    {
      description: 'Test Review 2',
      user_id: 1,
      product_id: 1,
      username: 'Stirling Moss'
    }
    ], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  }
};
