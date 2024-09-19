const express= require ("express");
const router= express.Router ();
const pedido_controlador= require ("../controladores/pedidos_controlador.js");

/**
 * ruta de pedidos
 */
router.get ('/', pedido_controlador.obtener_pedidos);
router.get ('/:id', pedido_controlador.obtener_id_pedidos);
router.post ('/', pedido_controlador.insertar_pedidos);
router.put ('/:id', pedido_controlador.update_pedidos);
router.delete ('/:id', pedido_controlador.delete_pedidos);

module.exports= router;