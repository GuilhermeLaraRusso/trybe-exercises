'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Employees',
   [
     { first_name: 'Marcos', last_name: 'Zuck', age: 49, },
     { first_name: 'Fred', last_name: 'Mercurio', age: 19, },
     { first_name: 'Ayrton', last_name: 'Keno', age: 51, },
     { first_name: 'Robin', last_name: 'Mathias', age: 63, },
   ],
   {},
   )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Employees', null, {});
  }
};
