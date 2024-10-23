
async function obtenerProductos() {
    const response = await fetch('$http://localhost:3000/productos');
    const productos = await response.json();
    const lista = document.getElementById('lista-productos');
    lista.textContent = '';
    productos.forEach(producto => {
        const li = document.createElement('li');
        li.textContent = `${producto.nombre} - $${producto.precio} (Stock: ${producto.stock})`;
        lista.appendChild(li);
    });
}

async function agregarProducto(e) {
    e.preventDefault();
    // const nombre = document.getElementById('nombre_producto').value;
    // const precio = document.getElementById('precio_producto').value;
    // const stock = document.getElementById('stock_producto').value;
    // const body={nombre,precio,stock}
    const data = new FormData(e.target);
    const body = [...data.entries()].reduce((obj, [key, value]) => {
        obj[key] = value;
        return obj;
    }, {});
    body.foto=body.foto.name;
    // console.log(.name);
    console.log(body);
    try {        
        await fetch('http://localhost:3000/productos/insert', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(body) // Convierte el cuerpo a JSON
          })
          .then (response => response.json())
          .then(json=>console.log(json))
    } catch (error) {
        if (isNetworkError(error)) {
            console.log("error de network")
            return false;
        }
        throw error;
    }
    // await fetch('http://localhost:3000/productos/insert', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ nombre, precio, stock }),
    // });

    // obtenerProductos();
}

async function obtenerUsuarios() {
    const response = await fetch('http://localhost:3000/usuarios');
    const usuarios = await response.json();
    const lista = document.getElementById('lista-usuarios');
    lista.innerHTML = '';
    usuarios.forEach(usuario => {
        const li = document.createElement('li');
        li.textContent = `${usuario.nombre} ${usuario.apellido}`;
        lista.appendChild(li);
    });
}

async function agregarUsuario(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const gmail = document.getElementById('gmail').value;
    const password = document.getElementById('password').value;

    await fetch('http://localhost:3000/usuarios/insert', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, apellido, gmail, password }),
    });

    obtenerUsuarios(); 
}

async function obtenerPedidos() {
    const response = await fetch('http://localhost:3000/pedidos');
    const pedidos = await response.json();
    const lista = document.getElementById('lista-pedidos');
    lista.innerHTML = '';   
    pedidos.forEach(pedido => {
        const li = document.createElement('li');
        li.textContent = `Pedido #${pedido.id_pedido} - Producto ID: ${pedido.id_producto} - Cantidad: ${pedido.cantidad}`;
        lista.appendChild(li);
    });
}
document.getElementById ("form_productos").addEventListener ("submit", agregarProducto)