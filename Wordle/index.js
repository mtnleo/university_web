// importing the Cursor class to control the keyboard and guesses
import {Cursor} from "./Cursor.js"

const keyboard = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", " ",
                 "a", "s", "d", "f", "g", "h", "j", "k", "l", " ",
                 "Enter", "z", "x", "c", "v", "b", "n", "m", "Remove", " "];
const containers = ["top_row_kb", "mid_row_kb", "btm_row_kb"];

const cursor = new Cursor();

// building the page ---------------------------
let i = 0;

keyboard.forEach(element => {
    if (element === " ") {
        i++;
    }
    else {
        
        let newButton = document.createElement("button");
        newButton.setAttribute("id", element);
        newButton.onclick = () => reply_click(element)
        let nodeButton = document.createTextNode(element.toUpperCase());
        newButton.appendChild(nodeButton);

        let container = document.getElementById(containers[i]);
        container.appendChild(newButton);
    }
});
// ------------------------------

// get the value of the button that's getting clicked
function reply_click(e) {
    if (e != "Remove" && e != "Enter" && cursor.getWord().length < 5) {
        cursor.addLetter(e);
        document.getElementById("r" + cursor.getRow() + "c" + cursor.getColumn()).innerText = e;
        cursor.increaseColumn();
    }
    else if(e == "Remove" && cursor.getWord().length > 0) {
        cursor.removeLetter();
        cursor.decreaseColumn();
        document.getElementById("r" + cursor.getRow() + "c" + cursor.getColumn()).innerText = "";
    }
    else if (cursor.getWord().length == 5) {
        // not yet
    }
    
    console.log(cursor.getColumn());
    console.log(cursor.getWord());
}


// ...forEach(letra => {})
// <button onclick="reply_click(letra)"

// Guardar todas las teclas del teclado en un arreglo, en el orden correcto, es decir, empeza por "qwerty"
// Mediante un for anda mostrandolas y cuando llegues al limite de teclas por linea, es decir, en la primer linea hay 10 letras, ahi indicas
// que hay que meter las siguientes letras en un contenedor a parte, o sea el de la segunda linea del teclado.

// En base a eso, como estas renderizando las letras de manera dinamica gracias a un arreglo, lo que podes hacer
// es que al crear cada boton, al mismo boton le asignas la funcion de reply_click pasandole el indice como 
// parametro para que sepa de que letra estas hablando y pueda insertarla mas adelante.

// Para manejar el tema de que palabra esta siendo escrita deberias usar un arreglo en el cual vayas
// pusheando las teclas que van siendo tocadas por el usuario.

// Y la misma logica del for para mostrar las letras en los cuadrados de arriba

const guess_containers = ["row1", "row2", "row3", "row4", "row5", "row6"];

let j = 0;

guess_containers.forEach(element => {
    for (let k = 0; k < 5; k++) {
        let newBox = document.createElement("div");
        newBox.setAttribute("id", "r" + element[3] + "c" + k);
        newBox.setAttribute("class", "guess_box");
        let nodeBox = document.createTextNode("");
        newBox.appendChild(nodeBox);

        let container = document.getElementById(element);
        container.appendChild(newBox);
    }
})