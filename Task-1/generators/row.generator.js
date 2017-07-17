const values = require('../values');
const count = values.rows - 1;

const randomGenerator = (min, max) => {
    const range = max - min + 1;
    const value = Math.floor( Math.random() * range ) + min;
    return value;
};

const rowGenerator = () => {
    const len = values.names.length - 1;
    const rows = [];
    for (let i = 0; i < count; i += 1) {
        const name = values.names[randomGenerator(0, len)];
        const age = randomGenerator(values.minAge, values.maxAge);
        const score = randomGenerator(values.minScore, values.maxScore);     
        const row = { name, age, score };
        rows.push(row);
    }
    return rows;
};

const oddRowGenerator = () => {
    const rows = [];
    for (let i = 3; i <= count; i += 2) {
        rows.push(i);
    }
    return rows;
};

module.exports = {
    rowGenerator,
    oddRowGenerator,
};
