function recursiveFactorial(num) {
    if(num <= 0) {
        return 1;
    }
    return num * recursiveFactorial(num - 1);
}

function recursiveFactorialRange(min, max) {
    for(let i = min; i <= max; i += 1) {
        console.log(recursiveFactorial(i))
    }
}

module.exports = {
    recursiveFactorialRange,
}