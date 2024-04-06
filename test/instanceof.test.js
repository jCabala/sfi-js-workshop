import { describe, it } from "node:test";
import assert from 'node:assert';

function Person(name) {
    this.name = name;
}

function INSTANCEOF(obj, constructor) {
    if(obj.__proto__ === null) return false

    if(obj.__proto__.constructor === constructor) {
        return true
    } 

    return INSTANCEOF(obj.__proto__, constructor)
}

describe('INSTANCEOF', function () {
    it('original implementation verifies prototype chain', function () {
        const p = new Person('Mateusz');

        assert.ok(p instanceof Person);
        assert.ok(p instanceof Object);
        assert.ok(!(p instanceof Array));
    });

    it('on self', function () {
        const p = new Person('Mateusz');

        assert.ok(INSTANCEOF(p, Person));
    });

    it('on own parent', function () {
        const p = new Person('Mateusz');

        assert.ok(INSTANCEOF(p, Object));
    });

    it('on another parent', function () {
        const p = new Person('Mateusz');

        assert.ok(!INSTANCEOF(p, Array));
    });
});