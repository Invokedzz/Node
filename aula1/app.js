/*const mod1 = require('./mod1');
console.log(mod1); // Exporta tudo daquele arquivo pra cá.
console.log(mod1.callName()); // Pode dar problema caso na função tiver "console.log"

const { nome, nickname, callName} = require('./mod1');
console.log(callName, nickname); */
const path = require('path');
const { Person } = require('./mod1');
const p = new Person('Abrey');
console.log(p);