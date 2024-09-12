const express= require ('express');
const promiseQuery= require ('../config/data_base');
const producto= require ('../modelos/productos_model');;
const cloudinary = require('../config/cloudinary')

console.log(cloudinary ? 'anda' : 'no anda cloduinary')

// controladores

/**
 * obtener todos los productos
 * @param { * } req 
 * @param { * } res 
 */
const obtener_productos= async (req, res) => {
    try {
        // const query= "select * from productos";
        // const productos= await promiseQuery (query);
        // res.json (productos);

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
        // const { id }= req.params;
        // const query= "select * from productos where id= ?";
        // const productos= await promiseQuery (query, [id]);

        const productos= await producto.find (id);

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
        // const { nombre, precio, stock }= req.body
        // const query= "insert into productos (nombre, precio, stock) values (?, ?, ?)";
        // await promiseQuery (query, [nombre, precio, stock]);
        // res.json ({ message: "producto ingresado" });

        const productos= await producto.findOrCreate (nombre, precio, stock);

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
        // const { id }= req.params;
        // const { nombre, precio, stock }= req.body;
        // const query= "update productos set nombre= ?, precio= ?, stock= ? where id= ?";

        const productos= await producto.update ({
            nombre: 'nombre',
            precio: 'precio',
            stock: 'stock',
            where: {
                id: 'id'
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
        // const { id }= req.params;
        // const query= "delete from productos where id= ?";
        // const productos= await promiseQuery (query, [id, nombre, precio, stock]);
        // res.json (productos);

        const productos= await producto.destroy ({
            where: {
                id: 'id'
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