const fher = {
    nombre: "Fernando",
    edad: 30,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
} // Utilizar this para acceder a las propiedades del objeto

const pedro = {
    nombre: "Pedro",
    edad: 15,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}

// fher.imprimir();

// Ok esto se puede crear con la palabra reservada new
// Aunque funciona, actualmente no es la forma correcta de crear instancias de objetos,
// puede confundirse con una función normal u olvidar usar el new, por lo que se recomienda utilizar clases
function Persona(nombre, edad) {
    console.log('Se ejecutó esta línea');

    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function () {
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}

const maria = new Persona('María', 18);
const melissa = new Persona('Melissa', 35);
// console.log(maria);

maria.imprimir();
melissa.imprimir();
