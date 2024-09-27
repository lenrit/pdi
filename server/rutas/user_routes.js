const express= require ("express");
const router= express.Router ();
const usuario_controlador= require ("../controladores/usuario_controlador");

/**
 * ruta de usuarios
 */
router.get ('/', usuario_controlador.obtener_usuarios);
router.get ('/:id', usuario_controlador.obtener_id);
router.post ('/insert', usuario_controlador.insertar_usuarios);
router.delete ('/delete/:id', usuario_controlador.delete_usuarios);
router.put ('/update/:id', usuario_controlador.update_usuarios);

module.exports= router;