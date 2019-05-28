import { Sudoku } from './../src/sudoku.js';

describe('Sudoku', function() {


  it('should correctly determine whether any elements in array repeat themselves', function() {
    var sudoku = new Sudoku([2,3,4,5,6,7,8,9,1], [2,3,4,5,6,7,8,9,1])
    expect(sudoku.checkWin()).toEqual(true);
  });
});
