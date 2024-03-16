import { describe, it } from "node:test";
import assert from 'node:assert';

function Person(name) {
    this.name = name;
}

function INSTANCEOF(obj, constructor) {
}

describe('INSTANCEOF', function () {
    it('original implementation verifies prototype chain', function () {
        const p = new Person('Mateusz');

        assert.ok(p instanceof Person);
        assert.ok(p instanceof Object);
        assert.ok(!(p instanceof Array));
    });

    it.skip('on self', function () {
        const p = new Person('Mateusz');

        assert.ok(INSTANCEOF(p, Person));
    });

    it.skip('on own parent', function () {
        const p = new Person('Mateusz');

        assert.ok(INSTANCEOF(p, Object));
    });

    it.skip('on another parent', function () {
        const p = new Person('Mateusz');

        assert.ok(!INSTANCEOF(p, Array));
    });
});