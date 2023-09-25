class auto {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
}
 //sumar(9, 1);

const alumnx = {nombre: "Harry", apellido: "Potter", casa: "Gryffindor"};
// //console.log(alumnx);

// //console.log(alumnx2.apellido);

// const funcioncitaDividir = (a, b) => {
//     return a / b;
// }

// console.log(funcioncitaDividir(10, 5));

//document.getElementById("header").innerText = "Ken";
//document.getElementById("header").style.color = "pink";

// // const botones = document.querySelectorAll(".boton");
// // console.log(botones)
// // botones.forEach((boton) => {
// //     boton.addEventListener("click", () => cambiarColor(boton))
// // })

// // function cambiarColor(boton) {
// //     console.log(boton)
// //     if(boton.style.background == "black") {
// //         boton.style.background = "red";
// //     }
// //     else {
// //         boton.style.background = "black";
// //     }
// // }

const arreglito = ["hola", 5, 420, 912, "chocotorta"];

for (let i = 0; i < arreglito.length; i++) {
    //console.log(arreglito[i]);
}

function funcionImprimir(elemento) {
    //console.log(elemento);
}

arreglito.forEach(funcionImprimir);

const alumnx2 = {nombre: "Tini", apellido:"Tin", casa:"Gryffindor"};

for (campo in alumnx2) {
    console.log(alumnx2[campo]);
}