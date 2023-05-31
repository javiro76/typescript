(() => {
let flash: { nombre: string, edad?: number, poderes: string[], getNombre?: () => string } = {

    nombre: 'Barry Allen',
    edad: 24,
    poderes: ['Puede correr muy rapido', 'Viajar en el tiempo'],
}

flash = {
    nombre: 'Clark Kent',
    poderes: ['Puede volar'],
    getNombre() {
        return this.nombre;
    }
}

console.log(flash.getNombre!() );


})();