/* const abc = require('./in');
const n = new abc('Golden', 'Garfield');
n.meow();
n.bark(); */

// Para poder termos acesso a "class Animal", devemos: module.exports = class Animal...
// Depois, vamos para o nosso outro file e fazemos o require.

const buildando = require('./in');
const x = new buildando('Pedro', 20);
console.log(x.name, x.price);