const express= require ('express');
const promiseQuery= require ('../config/data_base');
const usuario= require('../modelos/usuarios_model');

// controladores 
// todos los usuarios
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

// usuarios por id
const obtener_id= async (req, res) => {
    try {
        // const id= req.params.id;
        // const query= "select * from usuarios where id= ?";
        // const usuarios= await promiseQuery (query, [id]);
    } 
    catch (error){
        throw error;
    }
}

// insertar usuarios
const insertar_usuarios= async (req, res) => {
    try {
        // const { nombre, apellido, gmail, contraseña }= req.body
        // const query= "insert into usuarios (nombre, apellido, gmail, contraseña) values (?, ?, ?, ?)";
        // await promiseQuery (query, [nombre, apellido, gmail, contraseña]);
        // res.json ({ message: "usuarios ingresados" });
    } 
    catch (error){
        throw error;
    }
}

// actualizar usuarios
const update_usuarios= async (req, res) => {
    try {
        // const { id }= req.params;
        // const { nombre, apellido, gmail, contraseña }= req.body;
        // const query= "update productos set nombre= ?, apellido= ?, gmail= ?, contraseña= ? where id= ?";
    } 
    catch (error){
        throw error;
    }
}

// borrar usuarios
const delete_usuarios= async (req, res) => {
    try {
        // const { id }= req.params;
        // const query= "delete from usuarios where id= ?";
        // const usuarios= await promiseQuery (query, id);
        // res.json (usuarios);
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