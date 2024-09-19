const express= require ("express");
const router= express.Router ();
const producto_controlador= require ("../controladores/productos_controlador");

/**
 * ruta de productos
 */
router.get ('/', producto_controlador.obtener_productos);
router.get ('/:id', producto_controlador.obtener_id_productos);
router.post ('/', producto_controlador.insertar_productos);
router.put ('/:id', producto_controlador.update_productos);
router.delete ('/:id', producto_controlador.delete_productos);

module.exports= router;