// 1.
let nombre: string = "Martin";
let edad: number = 19;
let activo: boolean = true;

//2. 
interface Persona {
    nombre: string,
    edad: number,
    email: string
}

let martin: Persona = {
    nombre: "Martin",
    edad: 19,
    email: "mtnleonardi@gmail.com"
}

console.log(martin);

//3.
class Animal {
    private nombre: string;

    public constructor(nombre: string) {
        this.nombre = nombre;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public HacerSonido() {

    }
}

class Perro extends Animal {
    public constructor (nombre: string) {
        super(nombre);
    }

    public HacerSonido(): void {
        console.log("Woof!");
    }
}

let Boris = new Perro("Boris");
Boris.HacerSonido();