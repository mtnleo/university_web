// 1. Crea una Promise que se resuelva después de 2 segundos y muestra un mensaje cuando se resuelva
function promesaDosSegundos() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Se resolvió la operación de la promesa")
        }, 2000);
    })
}

async function asyncPromesa() {
    try {
        let response = await promesaDosSegundos();
        console.log(response);
    } catch (error) {
        console.error("Error: ", error);
    }
}

// con async - await
asyncPromesa();
// sin async - await
promesaDosSegundos()
    .then((e) => console.log(e));


// 2. Crea una función que acepte un número y devuelva una Promise que se resuelva con el doble del número después de 1 segundo.

function duplicar(num) {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(num * 2);
        }, 1000);
    })
}

async function functionDuplicar(num) {
    try {
        let response = await duplicar(num);
        console.log("El doble de " + num + " es = " + response);
    } 
    catch (error) {
        console.error("Error", error);
    }
}

functionDuplicar(512);

// 3. Crea dos Promises que se resuelvan después de 3 segundos cada una. Combina
// ambas Promises para mostrar un mensaje cuando ambas se hayan resuelto. (Pista: usar Promise.all)

const promiseThreeSecondsOne = new Promise((event) => {
    setTimeout(() => {
        event("Promesa 1 completada");
    }, 3000);
});

const promiseThreeSecondsTwo = new Promise((event) => {
    setTimeout(() => {
        event("Promesa 2 completada");
    }, 3000);
});
    
const promises = [promiseThreeSecondsOne, promiseThreeSecondsTwo];

async function asyncTwinPromises() {
    try {
        let response = await Promise.all(promises);
        console.log(response);
    }
    catch(error) {
        console.error("Error: ", error);
    }
}

asyncTwinPromises();

// 4.  Crea una función que simule una solicitud HTTP asincrónica utilizando setTimeout y
// devuelva una Promise que se resuelva con un objeto JSON después de 2 segundos

url = "https://api.chucknorris.io/jokes/random";

async function getChuckNorrisJoke() {
    try {
        let response = await fetch(url);
        if(response.ok) {
            let joke = await response.json();
            console.log(joke.value);
        }
        else {
            throw new Error("Error code: " + response.status);
        }
    }
    catch (error) {
        console.error("Error -> ", error);
    }
}

getChuckNorrisJoke();

// 5. Crea una función que acepte un arreglo de números y devuelva una Promise que se
// resuelva con la suma de los números después de 1 segundo. (Usar reduce)

arrNumerosPasar = [4, 5, 9]

function promiseSuma(arrNumeros) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(arrNumeros.reduce((a, b) => {return a + b}));
        }, 1000);
    })
}

async function asyncSuma() {
    try {
        let response = await promiseSuma(arrNumerosPasar);
        console.log(response);
    } catch (error) {
        console.error("Error");
    }
}

asyncSuma();

// 6. Crea una función asincrónica que haga una solicitud HTTP a una API de tu elección
// utilizando la función fetch y devuelva el resultado en formato JSON. Maneja los errores
// posibles

// lo hice en el 4

// 7. Investigar una Api que se pueda paginar. Crea una función asincrónica que haga una
// serie de solicitudes HTTP secuenciales para obtener datos de una API paginada. Utiliza
// async/await para manejar la paginación hasta que todos los datos se hayan recuperado.

// na ni idea ya lo que dice esto