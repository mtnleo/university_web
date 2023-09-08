const keyboard = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", " ",
                 "a", "s", "d", "f", "g", "h", "j", "k", "l", " ",
                 "Enter", "z", "x", "c", "v", "b", "n", "m", "Remove", " "];

const containers = ["top_row_kb", "mid_row_kb", "btm_row_kb"];

// building the page
let i = 0;
const actualWord = []

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

// get the id of the button that's getting clicked
function reply_click(e) {
    alert(e);
    actualWord.push(e)
    console.log(actualWord)
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