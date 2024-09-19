const express= require ("express");
const fileupload= require ("express-fileupload");
const cloudinary= require ("cloudinary").v2;
const productos= require ("modelos/productos_model")
const app= express ();
const path= require ("path");
require ("dotenv").config ();

/**
 * middleware
 */
app.use (express.json ());
app.use (fileupload ({
    useTempFiles: true
}));
app.use (express.urlencoded ({
    extended: true
}));

/**
 * formulario
 */
app.get ('/', (req, res) => {
    res.sendFile (path.join (__dirname, 'cliente', 'form_productos.html'))
});

app.post ('/productos/insert', async (req, res) => {
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

        /**
         * informacion del producto
         */
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

        /**
         * agregar el producto
         */
        const agregar_producto= await productos.create ({
            foto: upload.secure_url,
            nombre: nombre_producto,
            precio: precio_producto,
            stock: stock_producto
        });

        /**
        * url del archivo 
        */
        const { secure_url }= upload;
    }
    catch (error){
        throw error;
    }
});

document.getElementById ("form_productos").addEventListener ("submit", function (e){
    /**
     * prevenir el envio del formulario
     */
    e.preventDefault ();

    const formData= new FormData ();
    formData.append ('foto_producto', document.getElementById ('foto_producto').files [0]);
    formData.append ('nombre', document.getElementById ('nombre_producto').value);
    formData.append ('precio', document.getElementById ('precio_producto').value);
    formData.append ('stock', document.getElementById ('stock_producto').value);

    /**
     * peticion de datos
     */
    fetch ('/productos/insert', {
        method: 'post',
        body: formData
    })
    .then (response => response.text ())
    .then (data => {
        alert ("producto agregado");
    })
    .catch (error => {
        alert ("error al agregar");
    });

    const tbody= document.getElementById ("tbody_productos");
    
    productos.forEach(producto => {
        const td= document.createElement ("td");

        td.innerHTML= `
            <td>
                { producto.id_producto }
            </td>
            <td>
                <img src="${ producto.foto }" alt="${ producto.nombre }" width="50" height="50">
            </td>
            <td>
                { producto.nombre }
            </td>
            <td>
                { producto.precio }
            </td>
            <td>
                { producto.stock > 0 ? producto.stock : 'sin stock' }
            </td>
            <td>
                <button class="btn btn-outline-danger" data-id="${ producto.id_producto }">
                    eliminar
                </button>
            </td>
        `;

        tbody.appendChild (td);
    });

    tbody.addEventListener ("click", e => {
        if (e.target.matches ("button")){
            const id= e.target.getAttribute ("data-id");

            fetch (`/productos/${ id }`, { method: "delete" })
            .then(response => response.text ())
            .then(() => {
                // eliminar fila
                const td= e.target.closest ("td");

                td.remove ();
            });
        }
    });
});
