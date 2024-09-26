const express= require ("express");
const router= express.Router ();
const usuario_controlador= require ("../controladores/usuario_controlador");

/**
 * ruta de usuarios
 */
router.get ('/usuarios', usuario_controlador.obtener_usuarios);
router.get ('/usuarios/:id', usuario_controlador.obtener_id);
router.post ('/usuarios/insert', usuario_controlador.insertar_usuarios);
router.delete ('/usuarios/delete/:id', usuario_controlador.delete_usuarios);
router.put ('/usuarios/update/:id', usuario_controlador.update_usuarios);

module.exports= router;