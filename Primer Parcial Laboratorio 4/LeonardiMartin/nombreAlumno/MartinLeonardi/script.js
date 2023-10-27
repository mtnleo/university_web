//////////////////////////////////////////////////////////
// FORMULARIO DE REGISTRO -----------------------------------------------
/////////////////////////////////////////////////////////

const formulario_registro = document.getElementById("registrarse");  
const ids_registros = ["reg_nombre", "reg_apellido", "reg_email", "reg_password"]; 
const personaList = [];

formulario_registro.addEventListener("submit", (event) => {
    event.preventDefault();

	let id_vacio = validarInput(ids_registros);
	if (id_vacio === null) {
		let persona = {
			nombre: (document.getElementById(ids_registros[0]).value).trim(), // pongo el trim() por si el usuario carga un dato con muchos espacios en blanco
			apellido: (document.getElementById(ids_registros[1]).value).trim(),
			email: (document.getElementById(ids_registros[2]).value).trim(),
			password: (document.getElementById(ids_registros[3]).value).trim()
		}

		// cargar la persona a la lista
		personaList.push(persona);

		//verificar que se haya cargado correctamente en la lista
		console.log(personaList);
	}
	else {
		alert(id + " no se cargo, por favor cargarlo.");
	}

})


/// funcion para validar que no haya espacios en blanco
function validarInput(arr_ids) {
	for (id of arr_ids) {
		if ((document.getElementById(id).value).trim() === "") {
			return id; // devuelvo la id de donde se dejo en blanco para poder avisarle al usuario
		}
	}
	return null; // no se encontro ningun espacio en blanco
}


//////////////////////////////////////////////////////////
// FORMULARIO DE LOG IN -----------------------------------------------
/////////////////////////////////////////////////////////

const formulario_login = document.getElementById("loguearse");
const ids_logins = ["log_email", "log_password"];

formulario_login.addEventListener("submit", (event) => {
	event.preventDefault();

	let id_vacio_log = validarInput(ids_logins);
	if (id_vacio_log === null) {
		let usuario_log = buscarUsuarioLogIn();

		if (usuario_log !== null) {
			alert("Bienvenido de nuevo " + usuario_log.nombre + "!");
			// mostrar la tabla
			asyncCrearTabla();
		}
		else {
			alert("Email o contraseña invalidos");
		}


	} 
	else {
		alert(id + " no se cargo, por favor cargarlo.");
	}

})

function buscarUsuarioLogIn() {
	for (usuario of personaList) {
		if (usuario.email === document.getElementById("log_email").value && usuario.password === document.getElementById("log_password").value) {
			return usuario; // lo encuentra
		}
	}

	return null; // no lo encuentra
}

//////////////////////////////////////////////////////////
// CARGAR LA API -----------------------------------------
/////////////////////////////////////////////////////////

const url_peliculas = 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming';
const opciones = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '67ce9a7bddmsheb5e568c085e441p16581cjsndd627b02a361',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};

async function getMovie() {
	try {
		const response = await fetch(url_peliculas, opciones);
		if (response.ok) {
			const data = await response.json();
			return data;
		}
		else {
			throw new Error("Codigo de error -> " + response.status);
		}
	}
	catch (error) {
		console.error("|X| ERROR |X| " + error)
	}
}

async function asyncCrearTabla() {
	try {
		const peliculas = await getMovie();
		cargarTablaConPeliculas(peliculas);
	} 
	catch (error) {
		console.error("Error: " + error);
	}
}

function cargarTablaConPeliculas(json_peliculas) {
	const tabla = document.getElementById("tabla_peliculas");
	for (resultado of json_peliculas.results) {
		const tr = document.createElement("tr");

		const td_nombre = document.createElement("td");
		const td_anio = document.createElement("td");
		const td_img = document.createElement("td");
		td_img.setAttribute("alt", "Sin Imagen");

		const img_pelicula = document.createElement("img");
		if (resultado.primaryImage !== null) {
			img_pelicula.setAttribute("src", resultado.primaryImage.url);
			td_img.appendChild(img_pelicula);
		}
		else {
			td_img.innerText = "Sin Imagen :(";
		}
		
		td_nombre.innerText = resultado.originalTitleText.text;
		td_anio.innerText = resultado.releaseYear.year ;

		tr.appendChild(td_nombre);
		tr.appendChild(td_anio);
		tr.appendChild(td_img);

		tabla.appendChild(tr);
	}
}
