// 1. Escribe una función llamada `mostrarMensaje` que acepte un mensaje como argumento y una
// función de callback. La función `mostrarMensaje` debe mostrar el mensaje y luego llamar a la
// función de callback.

function mostrarMensaje(mensaje, callback) {
    console.log(mensaje);
    callback();
}

function terminoCargar() {
    console.log("Esta pagina terminó de cargar.");
}

mostrarMensaje("Esta pagina está cargando.", terminoCargar);

// 2. Crea una función llamada `sumarAsync` que acepte dos números y una función de callback.
// Esta función debe sumar los números y luego llamar a la función de callback con el resultado.

function sumarAsync(x, y, callback) {
    callback(x + y);
}

function imprimirResultado(resultado) {
    console.log("El resultado es: ", resultado);
}

sumarAsync(20, 13, imprimirResultado);

// 3. Escribe una función llamada `retrasarEjecucion` que acepte una función de callback y un
// número de milisegundos. La función debe llamar al callback después de la cantidad
// especificada de tiempo utilizando `setTimeout`.

function retrasarEjecucion(ms, callback) {
    setTimeout(callback, ms);
}

retrasarEjecucion(3000, terminoCargar);

// 4. Crea una función llamada `obtenerDatosUsuario` que simule una solicitud HTTP para obtener
// datos de usuario. Esta función debe aceptar un ID de usuario y una función de callback. Luego,
// dentro de la función, debes simular una solicitud a una API y, cuando se complete, llamar a la
// función de callback con los datos del usuario.

const usuarios = [ 
    {id: 1, nombre: "Martin"},
    {id: 2, nombre: "Akamai"},
    {id: 3, nombre: "Juancito"}
];

function obtenerDatosUsuario(id, callback) {
    const datos = usuarios.find((e) => e.id === id);

    if (datos) {
        callback(datos)
    } else {
        callback("No se encontró el/la empleadx.");
    }
}

obtenerDatosUsuario(2, imprimirResultado); // imprime Akamai
obtenerDatosUsuario(5, imprimirResultado); // imprime que no se encontró

// Modifica el ejercicio 4 para que en lugar de utilizar callbacks, utilice promesas para manejar la
// solicitud de datos de usuario.

// todavia no vi promesas jajan't