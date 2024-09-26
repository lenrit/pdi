const express= require ('express');
const promiseQuery= require ('../config/data_base');
const usuario= require ('../modelos/usuarios_model');
const { hashSync } = require('bcrypt');
const bcrypt= require ('bcrypt');
const salt_rounds= 10;


// controladores 

/**
 * obtener todos los usuarios
 * @param { * } req 
 * @param { * } res 
 */
const obtener_usuarios= async (req, res) => {
    try {
        const usuarios= await usuario.findAll ();

        res.json (usuarios);
    } 
    catch (error){
        throw error;
    }
}

/**
 * buscar usuarios por id
 * @param { * } req 
 * @param { * } res 
 */
const obtener_id= async (req, res) => {
    try {
        const id= req.params.id;
        
        const usuarios= await usuario.findByPk (id);

        res.json (usuarios);   
    } 
    catch (error){
        throw error;
    }
}

/**
 * insertar un usuario
 * @param { * } req 
 * @param { * } res 
 */
const insertar_usuarios= async (req, res) => {
    try {
        const { id_usuario,nombre, apellido, gmail, password }= req.body;
        console.log(nombre, apellido, gmail, password);
        const contraseña= await bcrypt.hash (password, salt_rounds);

        // const usuarios= await usuario.create (nombre, apellido, gmail, hash);
        const usuarios= await usuario.create ({id_usuario,nombre,apellido,gmail,contraseña});
        await usuarios.save();
        res.json (usuarios);
    } 
    catch (error){
        throw error;
    }
}

/**
 * actualizar un usuario
 * @param { * } req 
 * @param { * } res 
 */
const update_usuarios= async (req, res) => {
    try {
        const { id }= req.params;
        const { nombre, apellido, gmail, contraseña }= req.body;

        const usuarios= await usuario.update ({
            nombre,
            apellido,
            gmail,
            contraseña,
        },{
            where: {
                id_usuario: id
            }
        });

        // await usuarios.save ();

        res.json (usuarios);
    } 
    catch (error){
        throw error;
    }
}

/**
 * eliminar un usuario
 * @param { * } req 
 * @param { * } res 
 */
const delete_usuarios= async (req, res) => {
    try {
        const { id }= req.params;
        
        const usuarios= await usuario.destroy ({
            where: {
                id_usuario: id
            }
        });

        res.json (usuarios);
    } 
    catch (error){
        throw error;
    }
}

module.exports= {
    obtener_usuarios,
    obtener_id,
    insertar_usuarios,
    update_usuarios,
    delete_usuarios
}
