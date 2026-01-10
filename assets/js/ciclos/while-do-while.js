
const carros = ['Ford', 'Chevrolet', 'Honda', 'Toyota'];

let i = 0;


//WHILE
// La condición debe ser true para que el ciclo se ejecute

/* while (i < carros.length) {
    console.log(carros[i]);
    i++;
} */

// undefined
// null
// false

// Estos valores son considerados false en el ciclo while

/* while (carros[i]) {
    console.log(carros[i]);
    i++;
} */

/* while (carros[i]) {
    if (i === 1) {
        break;
    }
    console.log(carros[i]);
    i++;
} */

console.warn('While');

while (carros[i]) {
    if (i === 1) {
        i++;
        continue;
    }
    console.log(carros[i]);
    i++;
}



//DO WHILE
// Se ejecuta al menos una vez, luego evalúa la condición

console.warn('Do While');

let j = 10;

do {
    console.log(carros[j]);
    j++;
} while (carros[j]);