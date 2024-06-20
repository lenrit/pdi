const express = require('express');
const app = express();
// Conectamos a la DB
const mysqlConnection = require('./config/db');

app.use('/', require('./rutas/productos'))
app.get('/crear',require('./rutas/productos'))
app.listen(3000, () => {
  console.log('Mi aplicacion esta funcionando en el puerto 3000!');
})