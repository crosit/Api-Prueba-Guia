'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        email: 'christopher.esparza.contreras@gmail1.com',
        password: '$2a$10$4b0Mffx14vgglHw6gFUs1ul9QNyPyd5g9hwYmcZHNR0sS5GEHSDAq',
        name: 'chris',
        role: 'client',
        
      },
      {
        email: 'user@user.com',
        password: '$2a$10$sKmrbK.ZOiijANrj963avegaISEbipKhnQuVjUkEFURGDmXsWfwDW',
        name: 'user',
        role: 'user',
      },
      {
        email: 'admin@example.com',
        password: '$2a$10$ykNCf8KZt3ATFfovAzGiwOjtpAFU9rEPNhfnTyDeej892yOyHJyzK',
        name: 'admin',
        role: 'admin',
        
      }
      // Agrega más registros aquí si lo deseas
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
