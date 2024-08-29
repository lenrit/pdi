const {DataTypes} = require ('sequelize');
const db= require ('../config/data_base');

// estructura de productos
const productos= db.define ('producto', {
    id_producto: {
        type: DataTypes.INTEGER,
        primaryKey: true
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
});

productos.sync ({ alter: true });
module.exports= productos;