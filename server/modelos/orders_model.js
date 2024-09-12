const { Sequelize }= require ('sequelize');
const sequelize= require ('../config/db_sequelize');

/**
 * estructura de la tabla de pedidos
 */
const pedidos= sequelize.define ('pedidos', {
    id_pedido: {
        type: Sequelize.NUMBER,
        primaryKey: true,
        allowNull: true,
        validate: {
            isInt: true,
        }
    },
    id_producto: {
        type: Sequelize.NUMBER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: 'productos',
            key: 'id_productos',
        }
    },
    id_comerciante: {
        type: Sequelize.NUMBER,
        allowNull: false,
        references: {
            model: 'comerciante',
            key: 'id_comerciante',
        }
    },
    cantidad: {
        type: Sequelize.NUMBER,
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
})

pedidos.sync ({ alter: true });
module.exports= pedidos;