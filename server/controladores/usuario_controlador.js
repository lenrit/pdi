const express= require ('express');
const promiseQuery= require ('../config/data_base');
const usuario= require ('../modelos/usuarios_model');
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
        // const query= "select * from usuarios";
        // const usuarios= await promiseQuery (query);
        // res.json (usuarios);

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
        const {correo}= req.params;
        const usuarios= await usuario.findByPk (correo);

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
        const {nombre, apellido, gmail, contraseña }= req.body
        // const query= "insert into usuarios (nombre, apellido, gmail, contraseña) values (?, ?, ?, ?)";
        // await promiseQuery (query, [nombre, apellido, gmail, contraseña]);
        // res.json ({ message: "usuarios ingresados" });

        const contraseña_hasheada= await bcrypt.hash (contraseña, 10);
        const usuarios= await usuario.create ({nombre, apellido, gmail, contraseña_hasheada});

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
        const { correo }= req.params;
        const { nombre, apellido, contraseña }= req.body;
        const contraseña_hash=await bcrypt.hash(contraseña,10);
        const usuarios= await usuario.update ({
            nombre: nombre,
            apellido:apellido,
        },{
            where: {
                gmail: correo
            }
        });


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
        const { correo }= req.params;
        const usuarios= await usuario.destroy ({
            where: {
                gmail:correo
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