const express= require ("express");
const router= express.Router ();
const pedido_controlador= require ("../controladores/pedidos_controlador.js");

/**
 * ruta de pedidos
 */
router.get ('/pedidos', pedido_controlador.obtener_pedidos);
router.get ('/pedidos/:id', pedido_controlador.obtener_id_pedidos);
router.get ('/pedidos/insert', pedido_controlador.insertar_pedidos);
router.get ('/pedidos/update', pedido_controlador.update_pedidos);
router.get ('/pedidos/delete', pedido_controlador.delete_pedidos);

module.exports= router;