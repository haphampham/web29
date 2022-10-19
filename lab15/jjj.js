const table = document.body.firstElementChild;
const tbody= table.tBodies[0];

const rows= tbody.rows

for( let row of rows){
    const rowIndex = row.rowIndex;
    const cells = row.cells;

    const cell = cells[rowIndex];
    cell.style.backgroundColor ="pink,red,blue,green,black";
}