/*const nome = 'Louis';
const nickname = 'Miller';
const callName = () => nome + '' + nickname;
//module.exports.nome = nome;
//module.exports.nickname = nickname;
//module.exports.callName = callName;
exports.sagui = nome; // Não precisa ter necessariamente o nome daquilo que selecionei.
exports.nickname = nickname;
exports.callName = callName;
console.log(module.exports) // Adicionando funções e elementos a uma chave "module.exports" */

class Person {
    constructor (nome) {
        this.nome = nome;
    }
}
exports.Person = Person;