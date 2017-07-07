
const styles = require('./styles');
const { rowGenerator, oddRowGenerator } = require('./generators/row.generator');

const xl = require('exceljs');
const wb = new xl.Workbook();
const sheet = wb.addWorksheet('Sheet 1',
                { properties: { tabColor: { argb: 'FFC0000' } } } );
// eslint-disable-next-line no-proto
sheet.__proto__.styleRows = function styleRows(array, property, style) {
    array.forEach((i) => {
        const row = sheet.getRow(i).font = style;
        return row;
    });
};

sheet.columns = [
    { header: 'Name', key: 'name', width: 20 },
    { header: 'Age', key: 'age', width: 20 },
    { header: 'Score', key: 'score', width: 20 },
    { header: '', key: '', width: 20 },
    { header: 'Average Score', key: 'avscore', width: 20 },
];

sheet.getRow(1).fill = styles.headerColor;
sheet.getRow(1).font = styles.headerText;

sheet.addRows(rowGenerator());
sheet.styleRows(oddRowGenerator(), 'font', styles.oddRowText);
sheet.getCell('E2').value = { formula: 'AVERAGE(C2:C100)' };

wb.xlsx.writeFile('scores.xlsx')
    .then(console.log('Operation Successful!'))
    .catch((error) => console.log(error));
