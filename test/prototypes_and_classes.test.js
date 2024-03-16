import { test } from "node:test";
import assert from 'node:assert';

function Programmer1() {}
Programmer1.prototype.learnNewLanguage = function(language) {};


class Programmer2 {
    constructor() {}

    learnNewLanguage(language) {}
}

test.skip('programmer with prototype', function () {
    const programmer = new Programmer1();

    programmer.learnNewLanguage('Java');
    programmer.learnNewLanguage('Ruby');
    assert.ok(!programmer.isPragmatic());
    programmer.learnNewLanguage('Python');
    assert.ok(programmer.isPragmatic());
});

test.skip('programmer with class', function () {
    const programmer = new Programmer2();

    programmer.learnNewLanguage('Java');
    programmer.learnNewLanguage('Ruby');
    assert.ok(!programmer.isPragmatic());
    programmer.learnNewLanguage('Python');
    assert.ok(programmer.isPragmatic());
});