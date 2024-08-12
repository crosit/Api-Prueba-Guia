'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        name: 'Xbox Series X',
        description: 'Latest generation gaming console with high performance.',
        price: 499.99,
        stock: 150
      },
      {
        name: 'PlayStation 5',
        description: 'Next-gen gaming console with immersive graphics and speed.',
        price: 499.99,
        stock: 120
      },
      {
        name: 'Nintendo Switch',
        description: 'Hybrid gaming console for both handheld and TV play.',
        price: 299.99,
        stock: 180
      },
      {
        name: 'Samsung Galaxy S21',
        description: 'High-end smartphone with advanced camera features.',
        price: 799.99,
        stock: 200
      },
      {
        name: 'Apple iPhone 13',
        description: 'Latest iPhone with powerful A15 Bionic chip and excellent camera.',
        price: 899.99,
        stock: 150
      },
      {
        name: 'Sony WH-1000XM4',
        description: 'Noise-canceling over-ear headphones with high-resolution audio.',
        price: 349.99,
        stock: 75
      },
      {
        name: 'Apple AirPods Pro',
        description: 'Wireless earbuds with active noise cancellation and transparency mode.',
        price: 249.99,
        stock: 100
      },
      {
        name: 'Amazon Echo Dot',
        description: 'Compact smart speaker with Alexa voice assistant.',
        price: 49.99,
        stock: 300
      },
      {
        name: 'Google Nest Hub',
        description: 'Smart display with Google Assistant for controlling your smart home.',
        price: 89.99,
        stock: 80
      },
      {
        name: 'Fitbit Charge 5',
        description: 'Advanced fitness tracker with built-in GPS and health insights.',
        price: 149.99,
        stock: 60
      },
      {
        name: 'Oculus Quest 2',
        description: 'Standalone VR headset with immersive virtual reality experiences.',
        price: 299.99,
        stock: 90
      },
      {
        name: 'Razer DeathAdder V2',
        description: 'High-performance gaming mouse with ergonomic design and customizable buttons.',
        price: 69.99,
        stock: 110
      },
      {
        name: 'Logitech MX Master 3',
        description: 'Advanced wireless mouse with precision scroll wheel and ergonomic design.',
        price: 99.99,
        stock: 85
      },
      {
        name: 'Samsung QLED TV',
        description: 'Ultra HD QLED television with vibrant colors and high contrast.',
        price: 1199.99,
        stock: 50
      },
      {
        name: 'Apple MacBook Air',
        description: 'Lightweight laptop with M1 chip for high performance and long battery life.',
        price: 999.99,
        stock: 70
      },
      {
        name: 'Dell XPS 13',
        description: 'Compact laptop with high-resolution display and powerful performance.',
        price: 1099.99,
        stock: 65
      },
      {
        name: 'GoPro HERO9 Black',
        description: 'Action camera with 5K video recording and rugged design.',
        price: 399.99,
        stock: 40
      },
      {
        name: 'Bose QuietComfort 35 II',
        description: 'Wireless noise-canceling headphones with exceptional sound quality.',
        price: 299.99,
        stock: 55
      },
      {
        name: 'Sony A7 III',
        description: 'Full-frame mirrorless camera with high-resolution image capture.',
        price: 1999.99,
        stock: 25
      },
      {
        name: 'Panasonic Lumix GH5',
        description: 'Micro Four Thirds camera with 4K video recording and advanced features.',
        price: 1299.99,
        stock: 30
      },
      {
        name: 'Samsung Galaxy Tab S7',
        description: 'High-performance tablet with large display and S Pen included.',
        price: 649.99,
        stock: 80
      },
      {
        name: 'Apple iPad Pro',
        description: 'Powerful tablet with M1 chip and high-resolution display.',
        price: 799.99,
        stock: 75
      },
      {
        name: 'Anker PowerCore 20100mAh',
        description: 'Portable power bank with high capacity for charging devices on the go.',
        price: 39.99,
        stock: 150
      },
      {
        name: 'Roku Streaming Stick',
        description: 'Compact streaming device for watching your favorite shows and movies.',
        price: 29.99,
        stock: 120
      },
      {
        name: 'Elgato Stream Deck',
        description: 'Customizable control panel for streaming and productivity.',
        price: 149.99,
        stock: 65
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
