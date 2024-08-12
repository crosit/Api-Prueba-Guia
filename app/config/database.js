const { Sequelize } = require('sequelize');
require('dotenv').config();

// Configura los detalles de conexión
const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,          // Cambia esto si tu base de datos no está en localhost
  dialect: 'mysql',           // Cambia esto según el tipo de base de datos (mysql, postgres, sqlite, etc.)
  logging: false,             // Desactiva el registro de consultas SQL en consola (opcional)
  dialectOptions: {
    // Puedes agregar opciones específicas del dialecto aquí
  },
  define: {
    timestamps: true,         // Añade automáticamente los campos createdAt y updatedAt
    underscored: true,        // Usa nombres de columnas en formato snake_case
  },
});

module.exports = sequelize;
