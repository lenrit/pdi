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
        allowNull: false,
        references: {
            model: "productos",
            key: 'id_producto'
          }
    },
    id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: "usuarios",
            key: 'id_usuario'
          }
    },
    cantidad: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            isInt: true,
        }
    },
},{
    timestamps:true,
});

pedidos.sync ({ alter: true });

console.log("order");

module.exports= pedidos;