require('dotenv').config();
const mysql= require ('mysql2');
const { Sequelize }= require ('sequelize');

/**
 * bases de datos
 */
const sequelize= new Sequelize (process.env.DB_NAME, process.env.DB_USER, "", {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
});

module.exports= sequelize;