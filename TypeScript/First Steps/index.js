var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1.
var nombre = "Martin";
var edad = 19;
var activo = true;
var martin = {
    nombre: "Martin",
    edad: 19,
    email: "mtnleonardi@gmail.com"
};
console.log(martin);
//3.
var Animal = /** @class */ (function () {
    function Animal(nombre) {
        this.nombre = nombre;
    }
    Animal.prototype.getNombre = function () {
        return this.nombre;
    };
    Animal.prototype.HacerSonido = function () {
    };
    return Animal;
}());
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    function Perro(nombre) {
        return _super.call(this, nombre) || this;
    }
    Perro.prototype.HacerSonido = function () {
        console.log("Woof!");
    };
    return Perro;
}(Animal));
var Boris = new Perro("Boris");
Boris.HacerSonido();
//4.
function repetir(n, x) {
    var arreglo_repeticiones = [];
    for (var i = 0; i < n; i++) {
        arreglo_repeticiones.push(x);
    }
    return arreglo_repeticiones;
}
console.log(repetir(5, 2));
console.log(repetir(5, "To"));
//5.
var Dias;
(function (Dias) {
    Dias["Lunes"] = "Lunes";
    Dias["Martes"] = "Martes";
    Dias["Miercoles"] = "Miercoles";
    Dias["Jueves"] = "Jueves";
    Dias["Viernes"] = "Viernes";
    Dias["Sabado"] = "Sabado";
    Dias["Domingo"] = "Domingo";
})(Dias || (Dias = {}));
var hoy = Dias.Lunes;
console.log("Hoy es " + hoy.toLowerCase());
var Circulo = /** @class */ (function () {
    function Circulo(radio) {
        this.radio = radio;
    }
    Circulo.prototype.calcularArea = function () {
        return ((Math.pow(this.radio, 2)) * Math.PI);
    };
    return Circulo;
}());
var miCirculo = new Circulo(8);
console.log("Area de mi circulo: " + miCirculo.calcularArea());
// 7.
function intercambiar(a, b) {
    console.log("Antes -> A: " + a + "B: " + b);
    var aux = b;
    b = a;
    a = aux;
    console.log("Despues -> A: " + a + "B: " + b);
}
intercambiar(2, 4);
intercambiar("Hola", "Chau");
