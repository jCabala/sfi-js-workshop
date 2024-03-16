import { test } from "node:test";
import assert from 'node:assert';

test('4 this bindings', function () {
    // forget everything you know about this from other languages. this is not lexical, call site matters

    function getName() {
        return this.name; // strict makes this undefined, otherwise global/window
    }

    function Person() {
        this.name = 'person4';
    }

    const o1 = {name: 'person1', sayName: getName};
    const o2 = {name: 'person2', sayName: o1.sayName};
    const o3 = {name: 'person3'};

    // 1 - default binding. Lowest precedence. function form.
    assert.throws(() => getName(), /Cannot read/); // this is set to global or undefined (strict mode)

    // 2- implicit binding. method form
    assert.equal(o1.sayName(), 'person1'); // this is set to o1
    assert.equal(o2.sayName(), 'person2');

    // 3- explicit binding - call/apply form
    assert.equal(getName.call(o3), 'person3'); // this is set to o3

    // 4- new binding - constructor function call. Highest precedence. constructor form
    const f1 = new getName(); // this points to newly created f1
    assert.deepEqual(f1, {});
    const f2 = new Person(); // there's no class instantiation here
    assert.equal(f2.name, 'person4');
})