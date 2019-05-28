export function Sudoku(row, column) {
  this.row = row;
  this.column = column;

  var legal = "1,2,3,4,5,6,7,8,9";
  // check is legal, not win
  Sudoku.prototype.checkWin = function() {
    var sortedRow = this.row.sort().join();
    var sortedColumn = this.column.sort().join();
    if (sortedRow === legal && sortedColumn === legal) {
      return true;
    } else {
      return false;
    }
  }
}

// PROJECT EULER PRACTICE
var a = 1;
var c = 0;

export function Fib() {
  var evenFibs = [2];
  
  for (var b = 2; b < 4000000; b = c) {

    c = a + b;
    a = b;
    if (c % 2 === 0) {
      evenFibs.push(c)
    }
  }
  return evenFibs;
}
