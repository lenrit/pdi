const express = require('express');
const app = express();
const port = 3000;
// app.listen(3000, function(){
//     console.log("Funciona :D")
// })

app.get("/", (req, res) => {
  res.send("Marco Gonzalez")
})

lista_usuarios = [
    {nombre: "Marco", id:"34", password:"dell"}, 
    {nombre:"Johana", id:"7655", password:"locura"}, 
    {nombre:"Martin", id:"8008135", password:"node"}]
    
// const usuariosRouter = require('./routes/usuarios');
// app.use("/usuarios", usuariosRouter);

app.get("/usuarios",(req,res)=>{
    res.send(lista_usuarios);
})
app.get("/usuarios/:id", (req, res) => {
    const id = (req.params.id);
    const usuario =lista_usuarios.filter(usuario => usuario.id == id)
    res.json({
        usuario
})
})
app.listen(port, () => {
  console.log(`Servidor funcionando en el puerto ${port}`)
})