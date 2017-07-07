function recursiveFactorial(num) {
    if (num <= 0) {
        return 1;
    }
    return num * recursiveFactorial(num - 1);
}

function recursiveFactorialOptimised(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 1; i <= num; i += 1) {
        result *= i;
    }
    return result;
}

function recursiveFactorialRange(min, max) {
    for (let i = min; i <= max; i += 1) {
        console.log(recursiveFactorial(i));
    }
}

function recursiveFactorialRangeOptimised(min, max) {
    for (let i = min; i <= max; i += 1) {
        console.log(recursiveFactorialOptimised(i));
    }
}

module.exports = {
    recursiveFactorialRange,
    recursiveFactorialRangeOptimised,
};
