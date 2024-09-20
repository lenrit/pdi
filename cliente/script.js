// cloudinary.config ({
//     cloud_name: "dxepfcsgj",
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_SECRET,
// });

// try {
//     /**
//     * validar el envio de imagenes
//     */
//     if (!req.files || Object.keys (req.files).length === 0){
//         alert ("no hay productos");
//     }

//     /**
//      * informacion del producto
//      */
//     const file= req.files.foto_producto;
//     const { nombre, precio, stock }= req.body;

//     /**
//     * extension del archivo
//     */
//     const extension= file.mimetype.split ("/")[1];

//     /**
//     * verficar la extension del archivo
//     */
//     const verficar_ext= ["png", "jpg"];
//     if (!verficar_ext.includes (extension)){
//         alert ("extension del archivo invalida");
//     }

//     /**
//     * subir el archivo a cloudinary
//     */
//     const upload= await cloudinary.uploader.upload (file.tempFilePath, {
//         folder: 'imagenes'
//     });

//     /**
//      * agregar el producto
//      */
//     const agregar_producto= await productos.create ({
//         foto: upload.secure_url,
//         nombre: nombre_producto,
//         precio: precio_producto,
//         stock: stock_producto
//     });

//     /**
//     * url del archivo 
//     */
//     const { secure_url }= upload;
// }
// catch (error){
//     throw error;
// }

document.getElementById ("form_productos").addEventListener ("submit", async function (e){
    /**
     * prevenir el envio del formulario
     */
    e.preventDefault ();

    /**
     * peticion de datos
     */
    console.log(`${document.getElementById ('foto_producto').value}\n\n`);
    console.log(`${document.getElementById ('nombre_producto').value}\n\n`);
    console.log(`${document.getElementById ('precio_producto').value}\n\n`);
    console.log(`${document.getElementById ('stock_producto').value}\n\n`);

    // const foto_producto= document.getElementById ('foto_producto').value;
    const nombre_producto= document.querySelector("#nombre_producto").value;
    const precio_stock= document.querySelector("#precio_producto").value;
    const stock_producto= document.querySelector("#stock_producto").value;
    
    try {
        await fetch ('http://localhost:3000/productos/insert', {
            method: 'POST',
            body: JSON.stringify ({
                id_producto:"10",
                foto_producto: "foto_producto",
                nombre_producto: nombre_producto,
                precio_producto: precio_producto,
                stock_producto: stock_producto
            })
        })
        .then (response => response.json())
        .then (data => {
            alert ("producto agregado");
        })
    } 
    catch (error){
        alert ("error al agregar");   
    }

    // const tbody= document.getElementById ("tbody_productos");
    
    // productos.forEach(producto => {
    //     const td= document.createElement ("td");

    //     td.innerHTML= `
    //         <td>
    //             { producto.id_producto }
    //         </td>
    //         <td>
    //             <img src="${ producto.foto }" alt="${ producto.nombre }" width="50" height="50">
    //         </td>
    //         <td>
    //             { producto.nombre }
    //         </td>
    //         <td>
    //             { producto.precio }
    //         </td>
    //         <td>
    //             { producto.stock > 0 ? producto.stock : 'sin stock' }
    //         </td>
    //         <td>
    //             <button class="btn btn-outline-danger" data-id="${ producto.id_producto }">
    //                 eliminar
    //             </button>
    //         </td>
    //     `;

    //     tbody.appendChild (td);
    // });

    // tbody.addEventListener ("click", e => {
    //     if (e.target.matches ("button")){
    //         const id= e.target.getAttribute ("data-id");

    //         fetch (`/productos/${ id }`, { method: "delete" })
    //         .then(response => response.text ())
    //         .then(() => {
    //             // eliminar fila
    //             const td= e.target.closest ("td");

    //             td.remove ();
    //         });
    //     }
    // });
});