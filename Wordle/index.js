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

function checkWin(colorArray) {
    if (!colorArray.includes("gray") && !colorArray.includes("yellow") && colorArray.includes("green")) {
        return true;
    }
    else {
        return false;
    }
}

// get the value of the button that's getting clicked
function reply_click(e) {
    if (e != "Remove" && e != "Enter" && cursor.getWord().length < 5) {
        cursor.addLetter(e);
        document.getElementById("r" + cursor.getRow() + "c" + cursor.getColumn()).innerText = e.toUpperCase();
        cursor.increaseColumn();
    }
    else if(e == "Remove" && cursor.getWord().length > 0) {
        cursor.removeLetter();
        cursor.decreaseColumn();
        document.getElementById("r" + cursor.getRow() + "c" + cursor.getColumn()).innerText = "";
    }
    else if (e == "Enter" && cursor.getWord().length == 5) {
        //got to check first if word exists, then:
        let colorArray = checkWordSent(cursor.getWord(), "opalo"); // I hardcode it now, gotta change it later
        let curRow = cursor.getRow();

        for (let j = 0; j < 5; j++) {
            if (colorArray[j] == "green") {
                document.getElementById("r" + curRow + "c" + j).style.animationName = 'turn_to_green'; //green
                document.getElementById("r" + curRow + "c" + j).style.animationDuration = '1s'; //animation
                document.getElementById("r" + curRow + "c" + j).style.animationFillMode = 'forwards'; //animation
            }
            else if (colorArray[j] == "yellow") {
                document.getElementById("r" + curRow + "c" + j).style.animationName = 'turn_to_yellow'; //yellow
                document.getElementById("r" + curRow + "c" + j).style.animationDuration = '1s'; //animation
                document.getElementById("r" + curRow + "c" + j).style.animationFillMode = 'forwards'; //animation
            } else {
                document.getElementById("r" + curRow + "c" + j).style.animationName = 'turn_to_gray'; //gray
                document.getElementById("r" + curRow + "c" + j).style.animationDuration = '1s'; //animation
                document.getElementById("r" + curRow + "c" + j).style.animationFillMode = 'forwards'; //animation
            }
        }

        cursor.setColumn(0);
        cursor.deleteWord();
        cursor.increaseRow();

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

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
//////////// main functions for the wordle(n't) ///////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

function splitMysteryWordArray(mysteryWord) {
    let mysteryWordArray = new Array();

    for (let i = 0; i < 5; i++) {
        mysteryWordArray[i] = mysteryWord[i];
    }

    return mysteryWordArray;
}

function checkWordSent(wordSent, mysteryWord) {
    let mysteryWordArray = splitMysteryWordArray(mysteryWord);
    let colorArray = new Array();

    if (mysteryWordArray == wordSent) { // check later if its all in caps or not
        console.log("You won"); // provisional code
    }
    else {
        for (let i = 0; i < 5; i++) {
            if (wordSent[i].toUpperCase() != mysteryWordArray[i].toUpperCase()) {
                if (mysteryWordArray.includes(wordSent[i])) { //don't have wifi rn to check if this is like python, will check it later
                    colorArray[i] = "yellow";
                }
                else {
                    colorArray[i] = "gray";
                }
            } 
            else {
                colorArray[i] = "green";
            }   
        }
    }

    return colorArray;
}