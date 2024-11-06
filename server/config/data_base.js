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
    retry: {
        match: [
            Sequelize.ConnectionError,
            Sequelize.ConnectionTimedOutError,
            Sequelize.TimeoutError,
            /Deadlock/i,
            'SQLITE_BUSY'],
        max: 3
    }
});

module.exports= sequelize;