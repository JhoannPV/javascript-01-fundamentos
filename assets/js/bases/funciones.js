
function saludar(nombre) {
    //console.log(arguments);
    //console.log('Hola, ' + nombre);
    return [1, 2];

    // Esto nunca se va a ejecutar
    console.log('Soy un código que está después del return');
}

const saludar2 = function (nombre) {
    console.log('Hola, ' + nombre);
}

const saludarFlecha = () => {
    console.log('Hola, Flecha');
}

const saludarFlecha2 = (nombre) => {
    console.log('Hola, ' + nombre);
}

const retornoDeSaludar = saludar('Jhoann', 40, true, 'Colombia');
//console.log(retornoDeSaludar[0], retornoDeSaludar[1]);

// saludar2('Jhoann');
// saludarFlecha();
// saludarFlecha2('Jhoann');

function sumar(a, b) {
    return a + b;
}

// const sumar2 = (a, b) => {
//     return a + b;
// }

const sumar2 = (a, b) => a + b;
// console.log(sumar2(2, 2));


function getAleatorio() {
    return Math.random();
}

const getAleatorio2 = () => Math.random();

console.log(getAleatorio2());
