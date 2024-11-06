
async function logearUsuario(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const body = [...data.entries()].reduce((obj, [key, value]) => {
        obj[key] = value;
        return obj;
    }, {});
    console.log(body)
    document.cookie = `correo=${body.gmail}`; 
    let x=document.cookie;
    console.log(x.correo);
    // try {        
    //     await fetch('http://localhost:3000/usuarios/auth', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(body) // Convierte el cuerpo a JSON
    //       })
    //       .then (response => response.json())
    //       .then(json=>{
    //         console.log(json)
    //         console.log(body.correo);
    //         cookie(body.correo)
    //     }
    //     )
    // } catch (error) {
    //     // if (isNetworkError(error)) {
    //     //     console.log("error de network")
    //     //     return false;
    //     // }
    //     throw error;
    // }
}
document.getElementById ("formulario").addEventListener ("submit", logearUsuario)