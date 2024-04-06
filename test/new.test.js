import { describe, it } from "node:test";
import assert from 'node:assert';

function Person(name) {
    this.name = name;
}

Person.prototype.sayHi = function () {
    return 'Hi, I am ' + this.name;
};

function AnotherPerson(name) {
    this.name = name;
    return {}; // it has to be an object, not primitive value
}

function NullPerson(name) {
    this.name = name;
    return null; // it has to be an object, not primitive value
}

function NEW(constructor, args) {
    const obj = {}
    obj.__proto__ = constructor.prototype
    constructor.apply(obj, args)

    return obj
}

// NULL is at the top of class hierarchy lol
describe('NEW', function () {
    it('allows to create new objects', function () {
        const p1 = new Person('Mateusz');
        const p2 = new AnotherPerson('Kate');
        const p3 = new NullPerson('Mateusz');

        assert.equal(p1.sayHi(), 'Hi, I am Mateusz');
        assert.deepEqual(p2, {});
        assert.ok(p3 instanceof NullPerson);
    });

    it('allows to create new objects - own implementation - happy path', function () {
        const p1 = NEW(Person, ['Mateusz']);

        assert.equal(p1.sayHi(), 'Hi, I am Mateusz');
    });

    it.skip('allows to create new objects - own implementation - constructor fn returns object', function () {
        const p2 = NEW(AnotherPerson, ['Mateusz']);

        assert.deepEqual(p2, {});
    });

    it.skip('allows to create new objects - own implementation - constructor function returns primitive value', function () {
        const p3 = NEW(NullPerson, ['Mateusz']);

        assert.ok(p3 instanceof NullPerson);
    });

});