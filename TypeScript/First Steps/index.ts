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

//4.
function repetir<T>(n: number, x: T): T[] {
    const arreglo_repeticiones: T[] = [];
    for (let i: number = 0; i < n; i++) {
        arreglo_repeticiones.push(x);
    }
    return arreglo_repeticiones;
}

console.log(repetir(5, 2));
console.log(repetir(5, "To"));

//5.
enum Dias {
    Lunes = "Lunes",
    Martes = "Martes",
    Miercoles = "Miercoles",
    Jueves = "Jueves",
    Viernes = "Viernes",
    Sabado = "Sabado",
    Domingo = "Domingo"
}

let hoy: Dias = Dias.Lunes;

console.log("Hoy es " + hoy.toLowerCase());

//6.
interface Figura {
    calcularArea(): number;
}

class Circulo implements Figura {
    private radio: number;

    public constructor(radio: number) {
        this.radio = radio;
    }

    public calcularArea(): number {
        return ((this.radio**2) * Math.PI)
    }
}

const miCirculo: Circulo = new Circulo(8);
console.log("Area de mi circulo: " + miCirculo.calcularArea());

// 7.
function intercambiar<T>(a: T, b: T): void {
    console.log("Antes -> A: " + a + " B: " + b);
    let aux: T = b;
    b = a;
    a = aux;
    console.log("Despues -> A: " + a + " B: " + b);
}

intercambiar(2, 4);
intercambiar("Hola", "Chau");