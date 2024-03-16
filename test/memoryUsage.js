// TODO: paste your code from previous exercices here

function createProgrammer() {}

let array = [];
for (let i = 0; i < 1000000; ++i) {

    // TODO: uncomment one of the below to see the memory usage
    const programmer = createProgrammer();
    // const programmer = new Programmer();

    array.push(programmer);
}
console.log(process.memoryUsage().heapUsed / 1000000, 'MB');
console.log(array.length);