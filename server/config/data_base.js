const mysql= require ('mysql2');
const { Sequelize }= require ('sequelize');

const sequelize= new Sequelize ('pdi', 'root', null, {
    host: '127.0.0.1',
    port: '3307',
    dialect: 'mysql',
});

module.exports= sequelize;