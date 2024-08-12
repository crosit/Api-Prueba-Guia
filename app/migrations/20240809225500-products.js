'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.createTable('products', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING
        },
        description: {
          allowNull: false,
          type: Sequelize.TEXT
        },
        price: {
          allowNull: false,
          type: Sequelize.FLOAT
        },
        stock: {
          allowNull: false,
          type: Sequelize.INTEGER,
          
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn('NOW')
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn('NOW')
        },
        deleted_at: {
          type: Sequelize.DATE
        }
      });
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('products');
    
  }
};
