// 1. Crea una Promise que se resuelva después de 2 segundos y
// muestre un mensaje cuando se resuelva

const esperarDosSegundos = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Pasaron dos segundos");
}

esperarDosSegundos();

// 2. Crea una función que acepte un número y devuelva una Promise que se resuelva
// con el doble del número después de 1 segundo

function doubleAfterOneSecond(number) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(number * 2);
      }, 1000);
    });
  }

async function doubleOneSecond(number) {
    try {
		let result = await doubleAfterOneSecond(number);
		console.log("El resultado es: ", result)
    }
    catch (error) {
    	console.error("Error: ", error);
    }
}

doubleOneSecond(4);

// 3. Crea dos Promises que se resuelvan después de 3 segundos cada una. Combina
// ambas Promises para mostrar un mensaje cuando ambas se hayan resuelto. (Pista: usar
// Promise.all)

const promesa1 = new Promise((resolve) => {setTimeout(resolve, 3000)});

const promesa2 = new Promise((resolve) => {setTimeout(resolve, 3000)});


Promise.all([promesa1, promesa2])
	.then(() => {
		    console.log("Ambas promesas se completaron.")
		}	
	);

// 4. Crea una función que simule una solicitud HTTP asincrónica utilizando setTimeout y
// devuelva una Promise que se resuelva con un objeto JSON después de 2 segundos.

function SimHttpRequest() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let state = 404;
            if (state == 200) {
                resolve(JSON.stringify("Solicitud completada exitosamente. State: " + state));
            }
            else {
                reject(JSON.stringify("Error al recibir la solicitud. State: " + state));
            }
        }, 2000);
    });
}

async function GetRequest() {
    try {
        let result = await SimHttpRequest();
        console.log(JSON.parse(result));
    }
    catch (error) {
        console.error("Error: ", JSON.parse(error));
    }
    
}

GetRequest();

// 5. Crea una función que acepte un arreglo de números y devuelva una Promise que se
// resuelva con la suma de los números después de 1 segundo. (Usar reduce)

let numbers = [1, 3, 5];

function AddNumbers(numbers) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(numbers.reduce((total, number) => {return total + number}), 0);
        }, 1000)
    })
}

async function AddNumbersAwait() {
    try {
        let result = await AddNumbers(numbers);
        console.log("Suma: ", result);
    } catch (error) {
        console.error("Error > ", error);
    }
}

AddNumbersAwait();

// 6. Crea una función asincrónica que haga una solicitud HTTP a una API de tu elección
// utilizando la función fetch y devuelva el resultado en formato JSON. Maneja los errores
// posibles.

const url_api = "https://catfact.ninja/fact"; //if you change this URL it'll give Error 404

async function getCatFact() {
    try {
        const response = await fetch(url_api);
        if (response.ok) {
            const result = await response.json();
            console.log("> ", result);
        } else {
            throw new Error(response.status);
        }
        
    }
    catch(error) {
        console.error("> Error: ", error);
    }
}

getCatFact();

// 7. Investigar una Api que se pueda paginar. Crea una función asincrónica que haga una
// serie de solicitudes HTTP secuenciales para obtener datos de una API paginada. Utiliza
// async/await para manejar la paginación hasta que todos los datos se hayan recuperado.