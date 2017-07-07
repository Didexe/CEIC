function iterativeFactorialWhileLoop(min, max) {
    let result = min;
    let i = 0;
    while (i < max) {
        if (result === 0) {
            console.log(1);
            result = 1;
            continue;
        }
        if (result === 1) {
            console.log(1);
        }
        result = result * (i+1);
        i += 1;
        console.log(result);
    }
}

function iterativeFactorialForLoop(min, max) {
    let result = min;
    for (let i = min; i < max; i += 1) {
        if (result === 0) {
            console.log(1);
            result = 1;
            continue;
        }
        if (result === 1) {
            console.log(1);
        }
        result = result * (i+1);
        console.log(result);
    }
}

module.exports = {
    iterativeFactorialWhileLoop,
    iterativeFactorialForLoop,
};
