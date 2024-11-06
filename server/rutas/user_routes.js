const express= require ("express");
const router= express.Router ();
const usuario_controlador= require ("../controladores/usuario_controlador");

/**
 * ruta de usuarios
 */
router.post('/auth',usuario_controlador.user_login);
router.post('/login',usuario_controlador.logear);
router.get ('/', usuario_controlador.obtener_usuarios);
router.get ('/:id', usuario_controlador.obtener_id);
router.post ('/register', usuario_controlador.insertar_usuarios);
router.delete ('/delete/:id', usuario_controlador.delete_usuarios);
router.put ('/update/:id', usuario_controlador.update_usuarios);

module.exports= router;