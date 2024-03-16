import { describe, it } from "node:test";
import assert from 'node:assert';

function bind(originalFn, thisArg) {}

describe('Custom bind', function () {
    const person = {
        name: 'Mike',
        saySomething: function(a) {
            return this.name + a; // hint: set a breakpoint here
        }
    };

    const sayWithPersonBound = person.saySomething.bind(person);
    const customSayWithPersonBound = bind(person.saySomething, person);

    it.skip('should mimic Object.bind()', function () {
        assert.equal(sayWithPersonBound('!'), 'Mike!');
        assert.equal(customSayWithPersonBound('!'), 'Mike!');

        const personHacked = {name: 'hacked name', saySomething: customSayWithPersonBound};

        assert.equal(personHacked.saySomething('!'), 'Mike!');
    });

    it.skip('how should bind work together with a new operator?', function () {
        const o = new sayWithPersonBound('!');

        // TODO: uncomment correct assertion
        // assert.deepEqual(o, 'Mike!');
        // assert.deepEqual(o, 'undefined!');
        // assert.deepEqual(o, {});
    });

});