const { Sequelize }= require ('sequelize');
const sequelize= require ('../config/data_base');

/**
 * estructura de la tabla usuarios
 */
const usuarios= sequelize.define ('usuarios', {
    dni: {
        type: Sequelize.INTEGER,
        primaryKey: true, 
        allowNull: false,
        unique: true
    },
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
        unique: {
            args: true,
        },
        validate: {
            isEmail: true,
        }
    },
    contraseña: {
        type: Sequelize.STRING,
        allowNull: false,
        // validate: {
        //     isPassword: /^[0-9a-f]{64}$/i,
        // }
    },
}, {
    timestamps:false,
});

// usuarios.sync ({ alter: true });
usuarios.sync();
module.exports= usuarios;