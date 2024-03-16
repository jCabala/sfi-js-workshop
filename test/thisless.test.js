import { test } from "node:test";
import assert from 'node:assert';

function createProgrammer() {
}

// in this exercise you cannot use this
// only functions and object literals are allowed
test.skip('thisless programmer', function () {
    const programmer = createProgrammer();

    programmer.learnNewLanguage('Elm');
    programmer.learnNewLanguage('Clojure');
    assert.ok(!programmer.isPragmatic());
    programmer.learnNewLanguage('Haskell');
    assert.ok(programmer.isPragmatic());

    ["java", "c", "r"].forEach(programmer.learnNewLanguage);
});