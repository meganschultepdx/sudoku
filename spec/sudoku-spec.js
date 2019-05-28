import { Sudoku } from './../src/sudoku.js';
import { Fib } from './../src/sudoku.js';

describe('Sudoku', function() {


  it('should correctly determine whether any elements in array repeat themselves', function() {
    var sudoku = new Sudoku([2,3,4,5,6,7,8,9,1], [2,3,4,5,6,7,8,9,1])
    expect(sudoku.checkWin()).toEqual(true);
  });
});

// PROJECT EULER PRACTICE

describe('Fib', function() {

  it('should create an array of only even fibernacci numbers', function() {
    var evenFibs = Fib()
    expect(evenFibs[0]).toEqual(2);
    expect(evenFibs[1]).toEqual(8);
    expect(evenFibs[2]).toEqual(34);
  });
});
