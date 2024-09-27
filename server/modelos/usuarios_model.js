const { Sequelize }= require ('sequelize');
const sequelize= require ('../config/data_base');

/**
 * estructura de la tabla usuarios
 */
const usuarios= sequelize.define ('usuarios', {
    id_usuario: {
        type: Sequelize.INTEGER,
        primaryKey: true, 
        allowNull: false,
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
        validate: {
            isEmail: true,
        }
    },
    contraseña: {
        type: Sequelize.STRING,
        allowNull: false,
        // validate: {
        //     is: /^[0-9a-f]{64}$/i,
        // }
    },
},{
    timestamps:false,
});

usuarios.sync ({ alter: true });
console.log("usuarios");
module.exports= usuarios;