const express= require ('express');
const promiseQuery= require ('../config/data_base');
const usuario= require ('../modelos/usuarios_model');
const { hashSync } = require('bcrypt');
const bcrypt= require ('bcrypt');
const salt_rounds= 10;

regExCorreo=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
regExPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;
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
 
        const usuarios= await usuario.find (id);

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
        const { nombre, apellido, gmail, password }= req.body
        if(!regExPassword.test(password)){
            res.json({message:"contraseña invalida"});
            return false;
        }
        const contraseña= await bcrypt.hash (password, salt_rounds);
        if(await !regExCorreo.test(gmail)){
            res.json({message:"correo invalido"});
            return false;
        }
        const usuarios= await usuario.create ({id_usuario,nombre, apellido, gmail, contraseña});

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

        const usuarios= await pedido.update ({
            nombre: 'nombre',
            apellido: 'apellido',
            gmail: 'gmail',
            contraseña: 'contraseña',
            where: {
                id: 'id'
            }
        });

        await usuarios.save ();

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
                id: 'id'
            }
        });

        await usuarios.save ();

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