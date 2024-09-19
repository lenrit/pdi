const express= require ("express");
const router= express.Router ();
const producto_controlador= require ("../controladores/productos_controlador");

/**
 * ruta de productos
 */
router.get ('/productos', producto_controlador.obtener_productos);
router.get ('/productos/:id', producto_controlador.obtener_id_productos);
router.post ('/productos/insert', producto_controlador.insertar_productos);
router.put ('/productos/update/:id', producto_controlador.update_productos);
router.delete ('/productos/delete/:id', producto_controlador.delete_productos);

module.exports= router;
