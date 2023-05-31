(()=>{

type Hero = {
    name: string,
    age?: number,
    powers: string[],
    getName?: () => string
}
    
let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Puede correr muy rapido', 'Viajar en el tiempo'],
    }

    console.log(flash.name);

    let superman: Hero = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Puede volar'],
    }

})();