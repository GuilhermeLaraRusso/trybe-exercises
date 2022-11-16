"use strict";
function printBird(bd) {
    console.log(`O pássaro ${bd.name} pode voar? ${bd.canFly}`);
    console.log(`Suas cores normalmente são: ${bd.featherColor}`);
}
printBird({ name: 'Galinha', canFly: 'no', featherColor: ['branca', 'marrom'] });
