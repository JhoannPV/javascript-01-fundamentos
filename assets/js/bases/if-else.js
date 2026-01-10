let a = 5;

if (a >= 10) { // undefined, null, una asignación
    console.log('a es mayor o igual a 10');
} else {
    console.log('a es menor a 10');
}

// console.log('Fin de programa');

const hoy = new Date(); // {}

let dia = hoy.getDay(); // 0:domingo, 1:lunes, 2:martes...

console.log({ dia });

if (dia === 0) {
    console.log('Domingo');
} else if (dia === 1) {
    console.log('Lunes');

    // if (dia === 1) {
    //     console.log('Lunes');
    // } else {
    //     console.log('No es lunes ni domingo');
    // }
} else if (dia === 2) {
    console.log('Martes');
} else {
    console.log('Noes lunes, ,artes o domingo...');
}

// Sin usar IF Else, o Swicth, únicamente objetos
dia = 6; // 0:domingo, 1:lunes...

// Con objetos
const diaLetras = {
    0: () => 'Domingo - 0',
    1: () => 'Lunes - 1',
    2: () => 'Martes - 2',
    3: () => 'Miercoles - 3',
    4: () => 'Jueves - 4',
    5: () => 'Viernes - 5',
    6: () => 'Sábado - 6'
}
// -> día de la semana
console.log(diaLetras[dia]() || 'Día no definido');


// Con arreglos
const diaLetras2 = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado'];

// -> día de la semana
console.log(diaLetras2[dia] || 'Día no definido');
