const {iterativeFactorialForLoop, 
        iterativeFactorialWhileLoop} = require('./factorial_iterative');
const {recursiveFactorialRange} = require('./factorial_recursive');

var tests = [];

function repeatFactorial(func, times, min, max){
    const start = new Date().getTime();
    for(let i = 0; i < times; i += 1) {
        func(min, max)
    }
    const end = new Date().getTime();
    const total = (end - start) / 1000;
    console.log(`It took ${total} seconds to complete the task`)
    let test = {name: func.name, time: total}
    tests.push(test);
}

function displayResults() {
    tests.forEach(test => {
        console.log(`Function ${test.name} executed in ${test.time} seconds`)
    })
}

repeatFactorial(iterativeFactorialForLoop , 100000, 0, 10);
repeatFactorial(recursiveFactorialRange , 100000, 0, 10);
repeatFactorial(iterativeFactorialWhileLoop , 100000, 0, 10);
displayResults();


