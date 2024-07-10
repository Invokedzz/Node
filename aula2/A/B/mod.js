module.exports = function (x, y) {
    return x * y;
};
console.log(module.exports(2, 2));

module.exports = class Cat {
    constructor (nickname) {
        this.nickname = nickname;
    }
    meowing () {
        console.log(`${this.nickname} is meowing`);
    }
}