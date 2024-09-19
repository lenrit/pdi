const express= require ('express');
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
        const { id }= req.params;
        // const query= "select * from productos where id= ?";
        // const productos= await promiseQuery (query, [id]);

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
        const { id_producto,nombre, precio, stock }= req.body
        // const file= req.files.foto_producto;
        // console.log(file)
        // const upload = await cloudinary.uploader.upload (file.tempFilePath, {
        //     folder: 'imagenes'
        // });
        // console.log(upload.secure_url)

        const productos= await producto.create({id_producto,nombre, precio, stock});

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
        const { nombre, precio, stock }= req.body;
        // const query= "update productos set nombre= ?, precio= ?, stock= ? where id= ?";

        const productos= await producto.update ({
            nombre: nombre,
            precio: precio,
            stock: stock,
        },{
            where: {
                id_producto: id
            }
        });

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