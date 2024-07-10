//const multiply = require('./mod');
//console.log(multiply(2, 3));
const meow = require('./A/B/mod');
const catt = new meow('Felix');
catt.meowing();

const path = require('path');
console.log(path.resolve(__dirname, '..', '..')); // Os dois pontos indicam que cê retrocedeu duas pastas.
console.log(__filename);
console.log(__dirname);