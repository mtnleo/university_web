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
