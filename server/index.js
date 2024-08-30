const express= require ("express");
const app= express ();
const ruta_productos=require('./rutas/product_routes');
const ruta_usuarios=require('./rutas/user_routes');
const ruta_pedidos=require('./rutas/user_routes');
app.use('/users',ruta_usuarios);
app.use ('/productos',ruta_productos);
app.use ('/pedidos',ruta_pedidos);

app.listen (3000);
