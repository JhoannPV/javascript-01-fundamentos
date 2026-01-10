const personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity War',
}

console.log(personaje);
console.log('Nombre:', personaje.nombre);
console.log('Nombre:', personaje['nombre']);
console.log('Edad:', personaje.edad);

console.log('Coors:', personaje.coords);
console.log('Lat:', personaje.coords.lat);

console.log('No. Trajes:', personaje.trajes.length);
console.log('Último Traje:', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
console.log('Vivo', personaje[x]);

console.log('Última Película:', personaje['ultima-pelicula']);


// Más detalles

delete personaje.edad;
console.log(personaje);

personaje.casado = true;

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

// personaje = true; // Esto no se puede hacer, ya que 'personaje' es una constante
console.log(personaje);

Object.freeze(personaje);

personaje.dinero = 10000000000; // Esto no se añadirá porque el objeto está congelado
personaje.casado = false; // Esto tampoco se modificará
personaje.direccion.ubicacion = 'Costa Rica'; // Esto sí se puede modificar
console.log(personaje);


const propiedades = Object.getOwnPropertyNames(personaje); // Devuelve un objeto con las propiedades del objeto
console.log(propiedades);

const propiedades2 = Object.keys(personaje); // Devulve un objeto con las claves del objeto del tipo string
console.log(propiedades2);

const valores = Object.values(personaje);
console.log(valores);

