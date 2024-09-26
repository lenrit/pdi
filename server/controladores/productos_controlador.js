const express= require ('express');
const promiseQuery= require ('../config/data_base');
const producto= require ('../modelos/productos_model');
const cloudinary = require('../config/cloudinary');

console.log (cloudinary ? 'anda' : 'no anda cloduinary');

// controladores

/**
 * obtener todos los productos
 * @param { * } req 
 * @param { * } res 
 */
const obtener_productos= async (req, res) => {
    try {
        const productos= await producto.findAll ();

        res.json (productos);
    } 
    catch (error){
        throw error;
    }
}

/**
 * obtener productos por id
 * @param { * } req 
 * @param { * } res 
 */
const obtener_id_productos= async (req, res) => {
    try {
        const { id }= req.params;

        const productos= await producto.findByPk (id);

        res.json (productos);        
    } 
    catch (error){
        throw error;
    }
}

/**
 * insertar productos
 * @param { * } req 
 * @param { * } res 
 */
const insertar_productos= async (req, res) => {
    try {
        const { foto_producto, nombre_producto, precio_producto, stock_producto }= req.body

        const productos= await producto.create ({
            foto: foto_producto,
            nombre: nombre_producto,
            precio: precio_producto,
            stock: stock_producto
        });

        res.json (productos);
    } 
    catch (error){
        throw error;
    }
}

/**
 * actualizar un producto
 * @param { * } req 
 * @param { * } res 
 */
const update_productos= async (req, res) => {
    try {
        const { id }= req.params;
        const { nombre_producto, precio_producto, stock_producto }= req.body;

        const productos= await producto.update ({
            nombre: nombre_producto,
            precio: precio_producto,
            stock: stock_producto,
        },{
            where: {
                id_producto: id
            }
        });

        await productos.save ();

        res.json (productos);
    } 
    catch (error){
        throw error;
    }
}

/**
 * eliminar un producto
 * @param { * } req 
 * @param { * } res 
 */
const delete_productos= async (req, res) => {
    try {
        const { id }= req.params;

        const productos= await producto.destroy ({
            where: {
                id_producto: id
            }
        });

        await productos.save ();

        res.json (productos);
    } 
    catch (error){
        throw error;
    }
}

module.exports= {
    obtener_productos,
    obtener_id_productos,
    insertar_productos,
    update_productos,
    delete_productos
}