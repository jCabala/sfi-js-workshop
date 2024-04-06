import { test } from "node:test";
import assert from 'node:assert';

function Programmer1() {
    this.languages = []
}

Programmer1.prototype.learnNewLanguage = function(language) {
    this.languages.push(language)
}

Programmer1.prototype.isPragmatic = function() {
   return this.languages.length >= 3
}

class Programmer2 {
    constructor() {
        this.languages = []
    }

    learnNewLanguage(language) {
        this.languages.push(language)
    }

    isPragmatic() {
        return this.languages.length >= 3
    }
}

test('programmer with prototype', function () {
    // __proto__ LOL
    const programmer = new Programmer1();

    programmer.learnNewLanguage('Java');
    programmer.learnNewLanguage('Ruby');
    assert.ok(!programmer.isPragmatic());
    programmer.learnNewLanguage('Python');
    assert.ok(programmer.isPragmatic());

    // ['haskell', 'rest'].forEach(programmer.learnNewLanguage) // This will break
});

test('programmer with class', function () {
    // __proto__ LOL
    const programmer = new Programmer2();

    programmer.learnNewLanguage('Java');
    programmer.learnNewLanguage('Ruby');
    assert.ok(!programmer.isPragmatic());
    programmer.learnNewLanguage('Python');
    assert.ok(programmer.isPragmatic());
});