module.exports = class Animal {
    constructor (dog, cat) {
        this.cat = cat;
        this.dog = dog;
    }
    bark () {
        console.log(`${this.dog} is barking`);
    }
    meow () {
        console.log(`${this.cat} is meowing`);
    }
}

module.exports = function Build (name, price) {
    Object.defineProperty(this, 'name', {
        enumerable: true,
        configurable: true,
        get: function () {
            return name;
        },
        set: function (value) {
            if (typeof value !== 'string') return false; 
            name = value;
        }
    });
    Object.defineProperty(this, 'price', {
        enumerable: true,
        configurable: true,
        get: function () {
            return price
        },
        set: function (value) {
            if (typeof value !== 'number') return false;
            price = value;
        },
    });
}