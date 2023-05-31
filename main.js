"use strict";
const msg = 'Hello World ';
console.log(msg);
function sayHello(msg) {
    console.log(msg);
}
(() => {
    const a = 10;
    console.log(a);
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    fullName('Tony');
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    fullName('Tony', 'Stark');
})();
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent');
    console.log({ superman });
})();
(() => {
    function returnName() {
        return 'Fernando';
    }
})();
(() => {
    let flash = {
        nombre: 'Barry Allen',
        edad: 24,
        poderes: ['Puede correr muy rapido', 'Viajar en el tiempo'],
    };
    flash = {
        nombre: 'Clark Kent',
        poderes: ['Puede volar'],
        getNombre() {
            return this.nombre;
        }
    };
    console.log(flash.getNombre());
})();
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Puede correr muy rapido', 'Viajar en el tiempo'],
    };
    console.log(flash.name);
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Puede volar'],
    };
})();
(() => {
    let isSuperman = true;
    console.log({ isSuperman });
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 5] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.medium;
    console.log(currentAudio);
})();
const error = (message) => {
    throw new Error(message);
};
error('Help!');
(() => {
    const hero = ['Dr. Strange', 100];
    hero[0] = 'Ironman';
    hero[1] = 90;
    console.log(hero);
})();
(() => {
    function callBatman() {
        console.log('Mostrar batiseñal');
    }
    const callSuperman = () => {
        console.log('Llamar a Superman');
    };
})();
//# sourceMappingURL=main.js.map