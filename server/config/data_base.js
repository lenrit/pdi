require('dotenv').config()
const mysql = require('mysql2');
const { Sequelize } = require('sequelize');

/**
 * bases de datos
 */
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
});

module.exports = sequelize;