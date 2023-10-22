// 1. Cambia el contenido de un elemento `<p>` con el id "miParrafo" a "Hola, mundo!"

const form_1 = document.getElementById("ej_1_submit");

form_1.addEventListener("submit", (event) => {
    event.preventDefault();

    document.getElementById("miparrafo").innerText = "Hola Mundo! ✨";
});

// 2. Añade una clase "resaltado" a un elemento `<div>` con el id "miDiv".

const div_2 = document.getElementById("miDiv");

div_2.classList.add("resaltado");


// 3. Elimina un elemento `<ul>` con el id "miLista" de la página.

const form_3 = document.getElementById("form_3");

form_3.addEventListener("submit", (event) => {
    event.preventDefault();

    let eliminar = document.getElementById("eliminar_3");
    eliminar.remove();
});

// 4.  Crea un botón y, al hacer clic en él, muestra un mensaje de alerta que diga "¡Hiciste clic!". 

const button_4 = document.getElementById("boton_alert_4");

button_4.onclick = () => {alert("Hiciste click!");};

// 5. Agrega un evento que cambie el color de fondo de un elemento `<div>` al pasar el
// mouse sobre él y lo restaure cuando se retire el mouse.

//sobre el div del 2

function resaltar_on_div() {
    div_2.style.animationName = "resaltar_on";
    div_2.style.animationDuration = "1s";
    div_2.style.animationDirection = "linear";
    div_2.style.animationFillMode = "forwards";
}

function resaltar_off_div() {
    div_2.style.animationName = "resaltar_off";
    div_2.style.animationDuration = "1s";
    div_2.style.animationDirection = "linear";
    div_2.style.animationFillMode = "forwards";
}

div_2.onmouseover = () => { resaltar_on_div() };
div_2.onmouseout = () => { resaltar_off_div() };