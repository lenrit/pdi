const promiseQuery = require('../config/db');
const regExPassword=/^[0-9a-f]{64}$/i;
const regExEmail=/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
// Importamos modelo de Producto
const Producto = require('../models/Users')

// Controlador de productos

const obtenerTodos = async (req, res) => {
  // Obtiene todos los usuarios de la base de datos
  try {
    const productos = await Producto.findAll()
    return res.json(productos)
  } catch (error) {
    return res.json({err: error})
  }
}

const obtener = async (req, res) => {
  try {
    const { id } = req.params
    const producto = await Producto.findByPk(id)
  
    return res.status(200).json(producto) 
  } catch (error) {
    return res.status(500).json({error: "Internal Server Error"})
  }
}

const crear = async (req, res) => {
  try {
    const {id,nombre, apellido, gmail, contraseña } = req.body

    // Validaciones
    if (!nombre || nombre.length < 4) {
      return res.status(401).json({error: "Nombre inválido"})
    }
    if (!apellido || apellido.length < 4) {
      return res.status(401).json({error: "apellido inválido"})
    }
    if (!contraseña || regExPassword.test(contraseña)) {
      return res.status(401).json({error: "formato de contraseña inválido"})
    }
    if (!gmail || !regExEmail.test(gmail)) {
      return res.status(401).json({error: "format de correo inválido"})
    }
    const query = "INSERT INTO `usuarios` (id, nombre, apellido, gmail, contraseña) VALUES (?, ?, ?,?,?)"

    const producto =  await promiseQuery(query, [id, nombre, apellido, gmail, contraseña])
    res.json(producto)

  } catch (error) {
    return res.status(500).json({error: "Internal Server Error"})
  }
}

const actualizar = async (req, res) => {
  try {
    const {id}=req.query
    const {nombre, apellido, gmail} = req.body
    const query = "UPDATE `usuarios` SET nombre = ?, apellido = ?, gmail = ? WHERE id = ?"
    
    await promiseQuery(query, [nombre, apellido, gmail, id])
    res.json({message: "Producto actualizado exitosamente"})
  } catch (error) {
    throw error
  }
}

const borrar = async (req, res) => {
  try {
    const {id}=req.query;
    const query = "DELETE FROM usuarios WHERE id = ?"
    await promiseQuery(query, [id])
    res.json({message: "Producto borrado"})
  } catch (error) {
    throw error
  }
}

module.exports = {
  obtenerTodos,
  obtener,
  crear,
  actualizar,
  borrar
}