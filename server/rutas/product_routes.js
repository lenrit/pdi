const express= require ("express");
const router= express.Router ();
const producto_controlador= require ("../controladores/productos_controlador");
router.get ('/productos', producto_controlador.obtener_productos);
router.get ('/productos/:id', producto_controlador.obtener_id_productos);
router.get ('/productos/insert', producto_controlador.insertar_productos);
router.get ('/productos/update', producto_controlador.update_productos);
router.get ('/productos/delete', producto_controlador.delete_productos);
module.exports= router;