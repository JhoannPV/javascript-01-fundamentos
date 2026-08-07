class Persona {
    nombre = '';
    codigo = '';
    frase = '';

    constructor(nombre = 'Sin Nombre', codigo = 'Sin Código', frase = 'Sin Frase') {
        this.nombre = nombre;
        this.codigo = nombre;
        this.frase = frase;
    }
}

const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman');
const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman');
console.log(spiderman);
console.log(ironman);
