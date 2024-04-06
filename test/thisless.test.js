import { test } from "node:test";
import assert from 'node:assert';

function createProgrammer() {
    const languages = []

    return {
        learnNewLanguage(language) {
            languages.push(language)
        },
    
        isPragmatic() {
            return languages.length >= 3
        }
    }
}

// in this exercise you cannot use this
// only functions and object literals are allowed
test('thisless programmer', function () {
    const programmer = createProgrammer();

    programmer.learnNewLanguage('Elm');
    programmer.learnNewLanguage('Clojure');
    assert.ok(!programmer.isPragmatic());
    programmer.learnNewLanguage('Haskell');
    assert.ok(programmer.isPragmatic());

    ["java", "c", "r"].forEach(programmer.learnNewLanguage);
});