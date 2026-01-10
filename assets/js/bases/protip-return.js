
// function crearPersona(nombre, apellido) {
//     return {
//         nombre,
//         apellido: apellido,
//     }
// }

const crearPersona = (nombre, apellido) => ({ nombre, apellido });

const persona = crearPersona('Jhoann', 'Bohorquez')
// console.log(persona);

function imprimeArgumentos() {
    console.log(arguments);
}

// imprimeArgumentos(10, true, false, 'Jhoann', 'Hola')

// const imprimeArgumentos2 = (edad, ...args) => {
//     console.log({ edad, args });
// }
const imprimeArgumentos2 = (edad, ...args) => args;

// const argumentos = imprimeArgumentos2(10, true, false, 'Jhoann', 'Hola');
// console.log(argumentos);

const [casado, vivo, nombre, saludo] = imprimeArgumentos2(10, true, false, 'Jhoann', 'Hola');
console.log({ casado, vivo, nombre, saludo });


const { apellido: nuevoApellido } = crearPersona('Jhoann', 'Bohorquez');
console.log({ nuevoApellido });


const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
}

// const imprimePrropiedades = (personaje) => {
//     console.log('nombre:', personaje.nombre);
//     console.log('codeName:', personaje.codeName);
//     console.log('vivo:', personaje.vivo);
//     console.log('edad:', personaje.edad);
//     console.log('trajes:', personaje.trajes);
// }

const imprimePrropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {
    // edad = edad || 0;
    console.log({ nombre });
    console.log({ codeName });
    console.log({ vivo });
    console.log({ edad });
    console.log({ trajes });
}

imprimePrropiedades(tony);
