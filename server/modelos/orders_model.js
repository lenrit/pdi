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
    dni: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: "usuarios",
            key: 'dni'
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

// pedidos.sync ({ alter: true });
pedidos.sync();
console.log("order");

module.exports= pedidos;