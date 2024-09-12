const express= require ('express');
const promiseQuery= require ('../config/data_base');
const pedido= require ('../modelos/orders_model');

// controladores

/**
 * obtener todos los pedidos
 * @param { * } req 
 * @param { * } res 
 */
const obtener_pedidos= async (req, res) => {
    try {
        // const query= "select * from pedidos";
        // const pedidos= await promiseQuery (query);
        // res.json (pedidos);

        const pedidos= await pedido.findAll ();

        res.json (pedidos);
    } 
    catch (error){
        throw error;
    }
}

/**
 * obtener pedidos por id
 * @param { * } res 
 * @param { * } req 
 */
const obtener_id_pedidos= async (req, res) => {
    try {
        const id_pedido= req.params.id;
        // const query= "select * from pedidos where id_pedido= ?";
        // const pedidos= await promiseQuery (query, [id_pedido]);

        const pedidos= await pedido.find (id_pedido);

        res.json (pedidos);  
    } 
    catch (error){
        throw error;
    }
}

/**
 * insertar un pedido
 * @param { * } req 
 * @param { * } res 
 */
const insertar_pedidos= async (req, res) => {
    try {
        // const query= "insert into pedidos (id_pedido, id_producto, id_comerciante, cantidad, fecha) values (?, ?, ?, ?, ?)";
        // await promiseQuery (query, [id_pedido, id_producto, id_comerciante, cantidad, fecha]);
        // res.json ({ message: "pedidos ingresados" });

        const pedidos= await pedido.findOrCreate (id_pedido, id_producto, id_comerciante, cantidad, fecha);

        res.json (pedidos);
    } 
    catch (error){
        throw error;
    }
}

/**
 * actualizar un pedido
 * @param { * } req 
 * @param { * } res 
 */
const update_pedidos= async (req, res) => {
    try {
        const { id_pedidos }= req.params;
        const { id_producto, id_comerciante, cantidad, fecha }= req.body;
        // const query= "update pedidos set id_producto= ?, id_comerciante= ?, cantidad= ?, fecha= ? where id_pedido= ?";

        const pedidos= await pedido.update ({
            id_producto: 'id_producto',
            id_comerciante: 'id_comerciante',
            cantidad: 'cantidad',
            fecha: 'fecha',
            where: {
                id_pedido: 'id_pedido'
            }
        });

        await pedidos.save ();

        res.json (pedidos);
    } 
    catch (error){
        throw error;
    }
}

/**
 * eliminar un pedido
 * @param { * } req 
 * @param { * } res
 */
const delete_pedidos= async (req, res) => {
    try {
        const { id_pedido }= req.params;
        // const query= "delete from pedidos where id_pedido= ?";
        // const pedidos= await promiseQuery (query, [id_pedido, id_producto, id_comerciante, cantidad, fecha]);
        // res.json (pedidos);

        const pedidos= await pedido.destroy ({
            where: {
                id_pedido: 'id_pedido'
            }
        });

        await pedidos.save ();

        res.json (pedidos);
    } 
    catch (error){
        throw error;
    }
}

module.exports= {
    obtener_pedidos,
    obtener_id_pedidos,
    insertar_pedidos,
    update_pedidos,
    delete_pedidos
}