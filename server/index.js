const express= require ("express");
const app= express ();
const cors = require ("cors");
const fileUpload = require("express-fileupload");
const userModel=require("./modelos/usuarios_model")
const productModel=require("./modelos/productos_model")
const orderModel=require("./modelos/orders_model");
userModel.sync ({ alter: true });
productModel.sync ({ alter: true });
orderModel.sync ({ alter: true });
app.use(express.json());
app.use(cors());
app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
}));

const ruta_productos= require ('./rutas/product_routes');
const ruta_usuarios= require ('./rutas/user_routes');
const ruta_pedidos= require ('./rutas/order_routes');

app.use ('/usuarios', ruta_usuarios);
app.use ('/productos', ruta_productos);
app.use ('/pedidos', ruta_pedidos);

app.listen (3000);
