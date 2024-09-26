const { DataTypes } = require ('sequelize');
const db= require ('../config/data_base');

/**
 * estructura de la tabla productos
 */
const productos= db.define ('productos', {
    id_producto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull:false
    },
    foto: {
        type: DataTypes.STRING,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    precio: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
},{
    timestamps:false,
});

productos.sync ({ alter: true });
module.exports= productos;