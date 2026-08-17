class Rectangulo {
    #area = 0; // Propiedad privada en JavaScript

    constructor(base, altura) {
        this.base = base;
        this.altura = altura;

        this.#area = base * altura;
    }

    calcularArea() {
        console.log(this.#area);
    }

    #calcularAreaAlCuadrado() {
        console.log(this.#area * this.#area);
    }

    areaAlCuadrado() {
        this.#calcularAreaAlCuadrado();
    }
}

const rectangulo = new Rectangulo(10, 15);
// rectangulo.#area = 100; // Esto generará un error porque #area es una propiedad privada y no puede ser accedida desde fuera de la clase.
rectangulo.calcularArea();
// rectangulo.#calcularAreaAlCuadrado(); // Esto generará un error porque #calcularAreaAlCuadrado es un método privado y no puede ser accedido desde fuera de la clase.
rectangulo.areaAlCuadrado();

console.log(rectangulo);
