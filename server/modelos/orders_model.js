const { Sequelize }= require ('sequelize');
const sequelize= require ('../config/data_base');

/**
 * estructura de la tabla de pedidos
 */
const pedidos= sequelize.define ('pedidos', {
    id_pedido: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: true,
        validate: {
            isInt: true,
        }
    },
    id_producto: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    id_usuario: {
        type: Sequelize.INTEGER,
        primaryKey:true,
        allowNull: false
    },
    cantidad: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            isInt: true,
        }
    },
    fecha: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
            isDate: true,
        }
    },
},{
    timestamps:false,
});

pedidos.sync ({ alter: true });
module.exports= pedidos;