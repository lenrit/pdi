const { Sequelize }= require ('sequelize');
const sequelize= require ('../config/data_base');

/**
 * estructura de la tabla usuarios
 */
const usuarios= sequelize.define ('usuarios', {
    nombre: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    apellido: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    gmail: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
        validate: {
            isEmail: true,
        }
    },
    contraseña_hasheada: {
        type: Sequelize.STRING,
        allowNull: false
    },
},{
    timestamps:false,
});
module.exports= usuarios;