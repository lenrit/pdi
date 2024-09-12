const express= require ("express");
const fileupload= require ("express-fileupload");
const cloudinary= require ("cloudinary").v2;
const productos= require ("modelos/productos_model")
const app= express ();
require ("dotenv").config ();

app.post ('/productos', async (req, res) => {
    cloudinary.config ({
        cloud_name: "dxepfcsgj",
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_SECRET,
    });

    try {
        /**
        * validar el envio de imagenes
        */
        if (!req.files || Object.keys (req.files).length === 0){
            return res.status (400).send ("no hay imagenes");
        }

        const file= req.files.foto_producto;
        const { nombre, precio, stock }= req.body;

        /**
        * extension del archivo
        */
        const extension= file.mimetype.split ("/")[1];

        /**
        * verficar la extension del archivo
        */
        const verficar_ext= ["png", "jpg"];
        if (!verficar_ext.includes (extension)){
            return res.status (400).send ("extension del archivo invalida");
        }

        /**
        * subir el archivo a cloudinary
        */
        const upload= await cloudinary.uploader.upload (file.tempFilePath, {
            folder: 'imagenes'
        });

        const agregar_producto= await productos.create ({
            foto: upload.secure_url,
            nombre: nombre,
            precio: precio,
            stock: stock === "true" ? 1 : 0
        });

        /**
        * url del archivo 
        */
        const { secure_url }= upload;
    }
    catch (error){
        throw error;
    }

    document.getElementById ("form_productos").addEventListener ("submit", function (e){
        /**
         * prevenir el envio del formulario
         */
        e.preventDefault ();
    
        const foto_producto= document.getElementById ("foto_producto");
        const nombre_producto= document.getElementById ("nombre_producto");
        const precio_producto= document.getElementById ("precio_producto");

        function agregar_tabla (){}
    });
});