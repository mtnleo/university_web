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