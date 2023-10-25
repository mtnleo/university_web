if (window.location.pathname.includes("index.html")) {

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

    // 6. Crea un formulario con un campo de texto y un botón. Al hacer clic en el botón,
    // muestra el valor del campo de texto en un elemento `<p>`.

    const form_6 = document.getElementById("form_6");

    form_6.addEventListener("submit", (event) => {
        event.preventDefault();

        document.getElementById("cambiar_6").innerText = document.getElementById("input_form_6").value;
    });

    // 7. Añade un evento que escuche cuando se presione una tecla en el documento y
    // muestre el código de la tecla presionada en un elemento `<p>`.

    // 8.  Crea una lista de elementos `<li>`. Al hacer clic en un elemento de la lista, cambia
    // su color de fondo

    const lista_8 = document.getElementById("lista_8");
    let li_8;

    ul_8_text = ["Clickeame para cambiar el color", "No! Clickeame a mi!", "Nooo, a mi!"];

    for (let i = 0; i < 3; i++) {
        li_8 = document.createElement("li");
        li_8.innerText = ul_8_text[i];
        li_8.onclick = () => {
            if (lista_8.style.backgroundColor === "darkgrey") {
                lista_8.style.backgroundColor = "black";
            }
            else {
                lista_8.style.backgroundColor = "darkgrey";
            }
        }

        lista_8.appendChild(li_8);
    }

    // 9.  Implementa un contador que incremente en 1 cada vez que se haga clic en un botón.

    let boton_contador = document.getElementById("boton_contador");

    boton_contador.onclick = () => {
        document.getElementById("contador_9").innerText = parseInt(document.getElementById("contador_9").innerText) + 1;
    }

    // 11. Agrega un botón que oculte o muestre un elemento `<div>` con el id "miDiv".

    div_2
    let boton_esconder_div = document.getElementById("esconder_div");

    boton_esconder_div.onclick = () => {
        esconderDiv();
    }

    function esconderDiv() {
        if (div_2.style.display === "none") { // si esta escondido
            div_2.style.display = "flex";
            boton_esconder_div.innerText = "Esconder";
        }
        else { // si esta mostrandose
            div_2.style.display = "none";
            boton_esconder_div.innerText = "Mostrar";
        }
    }

    // 12. Crea un menú desplegable (select) con tres opciones. Al seleccionar una opción,
    // muestra un mensaje con el valor seleccionado.

    select_comida_favorita = document.getElementById("select_comida_favorita");

    select_comida_favorita.addEventListener("click", () => {
        document.getElementById("p_comida_favorita").innerText = "Tu comida favorita es " + select_comida_favorita.value;
        
    });

    // 13. Implementa un reloj digital que muestre la hora actual y se actualice cada segundo
    let clock = document.getElementById("clock");

    function imprimirHora() {
        clock.innerText = new Date();
    }

    setInterval(() => {
        imprimirHora();
    }, 1000);

    // 14. Crea una tabla con filas y columnas. Al hacer clic en una celda, cambia su contenido
    let ttt = "X";

    document.querySelectorAll('td').forEach(cell => {
        cell.addEventListener('click', evt => {
            (evt.target).innerText = ttt;
            if (ttt === "X") {
                ttt = "O";
            }
            else {
                ttt = "X";
            }
        }); 
    });

    // 15. 

}
else if (window.location.pathname.includes("galeria_imagenes.html")) {
    // 10. Crea una galería de imágenes. Al hacer clic en una imagen, muestra su descripción
    // en un elemento `<p>`.
    let p_10, li_10, img_10;

    id_arr_10 = ["venus", "girl_pearl", "harvesters"];
    //crear los <p>
    for (let i = 0; i < 3; i++) {
        p_10 = document.createElement("p");
        p_10.setAttribute("id", "p_" + id_arr_10[i]);
        p_10.innerText = "";
        
        li_10 = document.getElementById("li_" + id_arr_10[i]);
        li_10.appendChild(p_10);
    }

    function updateText(id) {
        p_10 = document.getElementById("p_" + id);
    
        if (id === "venus") {
            p_10.innerText = "Sandro Botticelli, The Birth of Venus, 1484–1486";
        } else if (id === "girl_pearl") {
            p_10.innerText = "Johannes Vermeer, Girl with a Pearl Earring, 1665";
        } else {
            p_10.innerText = "Pieter Bruegel the Elder, The Harvesters, 1565";
        }
    }

    function update_text(img_id) {
        p_10 = document.getElementById("p_" + img_id);
        console.log(p_10.id);
        if(p_10.id === "p_venus") {
            p_10.innerText = "Sandro Botticelli, The Birth of Venus, 1484–1486";
        }
        else if (p_10.id === "p_girl_pearl") {
            p_10.innerText = "Johannes Vermeer, Girl with a Pearl Earring, 1665";
        }
        else {
            p_10.innerText = "Pieter Bruegel the Elder, The Harvesters, 1565";
        }
    }

    //agregar los onclick a las imagenes
    for (img_id of id_arr_10) {
        img_10 = document.getElementById(img_id);
        img_10.onclick = (function(img_id) {
            return function() {
                updateText(img_id);
            };
        })(img_id);
        
    }

}