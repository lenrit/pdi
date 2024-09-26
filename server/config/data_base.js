require('dotenv').config();
const { Sequelize }= require ('sequelize');

/**
 * bases de datos
 */
const sequelize= new Sequelize (process.env.DB_NAME, process.env.DB_USER,'',{
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect:process.env.DB_DIALECT,
    retry: {
        match: [
            Sequelize.ConnectionError,
            Sequelize.ConnectionTimedOutError,
            Sequelize.TimeoutError,
            /Deadlock/i],
        max: 5
    }    
});

module.exports= sequelize;