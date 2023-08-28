class Alumno{
    constructor(firstName, lastName, pass, mail){
        this.firstName = firstName;
        this.lastName = lastName;
        this._pass = pass;
        this.email = mail;
    }

    getPass(){ //metodo de la clase
        return this._pass;
    }

    getEmail(){ //metodo de la clase
        return this.email;
    }

    getNombre(){ //metodo de la clase
        return this.firstName;
    }

    fullName(){ //metodo de la clase
        return this.firstName + ' ' + this.lastName;
    }

}

var alumnoList = new Array();

let formulario = document.getElementById("formulario")
const cargar = document.querySelector("[cargar]");

let flag = 0;

cargar.addEventListener("click", (evento) => {
    evento.preventDefault()

    const nombre = document.getElementById("nombre").value ?? 0
    const apellido = document.getElementById("apellido").value ?? 0
    const pass = document.getElementById("pass").value ?? 0
    const mail = document.getElementById("email").value ?? 0

    
    let alumno = new Alumno(nombre, apellido, pass, mail)
    
    alumnoList.push(alumno)

    console.log(alumnoList)

    document.getElementById("resultado").innerHTML = nombre + ' ' + apellido + ' ' + pass + ' ' + mail

    //mostrarDatos(flag , alumno)
});

const buscar = document.querySelector("[buscar]");

buscar.addEventListener("click", (evento) => {
    //evento.preventDefault()
    
    const nombre = document.getElementById("nombre2").value ?? 0
    const pass = document.getElementById("pass2").value ?? 0
    

    if(alumnoList.length != 0 ){
        alumnoList.forEach(alumno => {
            if(alumno.getNombre() == nombre && alumno.getPass() == pass){
                mostrarDatos(alumno.getEmail())
            }else{
                mostrarDatos("No se ha encontrado a la persona")
           }
        })
    }else{
        mostrarDatos("No hay elementos")
   }
});

function mostrarDatos(email){
        document.getElementsByTagName('p')[3].innerHTML = email ; //obtengo todas las etiquetas p y selecciono la 4
}

