/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  if ((board && board.length !== 9) || (board[0] && board[0].length !== 9))
    return;
  DFS(board);
};

var DFS = function(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === ".") {
        for (let num = 1; num <= 9; num++) {
          let c = "" + num;
          if (isValidSudoku(board, i, j, c)) {
            board[i][j] = c;
            if (DFS(board)) return true;
            else board[i][j] = ".";
          }
        }
        return false;
      }
    }
  }
  return true;
};

var isValidSudoku = function(board, row, col, c) {
  for (let i = 0; i < 9; i++) {
    if (board[row][i] !== "." && board[row][i] === c) return false;
    if (board[i][col] !== "." && board[i][col] === c) return false;
    let row_index = Math.floor(row / 3) * 3 + Math.floor(i / 3);
    let col_index = Math.floor(col / 3) * 3 + (i % 3);
    if (
      board[row_index][col_index] !== "." &&
      board[row_index][col_index] === c
    )
      return false;
  }
  return true;
};


solveSudoku([
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]);