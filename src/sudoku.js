export function Sudoku(row, column) {
  this.row = row;
  this.column = column;
}

var legal = "1,2,3,4,5,6,7,8,9";

  // check is legal, not win

Sudoku.prototype.checkWin = function() {
  var sortedRow = this.row.sort().join();
  var sortedColumn = this.column.sort().join();
  console.log(sortedRow);
  console.log(sortedColumn);
  if (sortedRow === legal && sortedColumn === legal) {
    return true;
  } else {
    return false;
  }

};
